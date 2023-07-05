import React, { useState, useEffect } from "react";
import { id, parseUnits } from "ethers/lib/utils";
import { useQuery } from "react-query";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
import "@quadrata/core-react/lib/cjs/quadrata-ui.min.css";
import {
  useWalletClient,
  useAccount,
  useNetwork,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
  usePrepareContractWrite,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// Quadrata
import QUAD_PASSPORT_ABI from "@quadrata/contracts/abis/QuadPassport.json";
import {
  Page,
  QuadClient,
  QuadAttribute,
  QuadClientConfig,
  QuadClientEnvironment,
  QuadMintParamsBigNumbers,
  QuadClientMintParamsReadyCallback,
} from "@quadrata/client-react";

const quadConfig: QuadClientConfig = {
  environment: QuadClientEnvironment.SANDBOX,
  protocolName: "NewCo, Inc",
};

const QUAD_PASSPORT_ADDRESS = "0x185cc335175B1E7E29e04A321E1873932379a4a0"; // Testnet

export interface AttributeOnboardStatusDto {
  data: {
    type: "attributes";
    toClaim: QuadAttribute[];
  };
}

// Component
export const Navbar: React.FC<{ accessToken: string }> = ({ accessToken }) => {
  const [apiAccessToken, setApiAccessToken] = useState("");

  useEffect(() => {
    const login = async () => {
      const response = await fetch("https://int.quadrata.com/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey:
            "fd08b391a667abac2cc6bc6ff643a1f1e16de5fa701b2b78a6fe427a39c1f79c",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setApiAccessToken(data.data.accessToken);
        console.log(data);
        console.log(data.data.accessToken);
      } else {
        console.log("Login failed  , sorry");
      }
    };

    login();
  }, []);

  // State
  const [signature, setSignature] = useState<string>();
  const [mintParams, setMintParams] = useState<QuadMintParamsBigNumbers>();
  const [mintComplete, setMintComplete] = useState(false);
  const [showClient, setShowClient] = useState(false);
  const [attributesToClaim, setAttributesToClaim] = useState<QuadAttribute[]>(
    []
  );

  // Hooks
  // const { chain: { id: chainId } = { id: 0 } } = useNetwork();
  const chainId = 80001;
  const { address: account, isConnecting, isDisconnected } = useAccount();
  const { data: signer } = useWalletClient();

  // Required attributes for this protocol
  const requiredAttributes = [QuadAttribute.DID, QuadAttribute.AML];

  // Check which attributes to claim for a given wallet
  const apiAttributesOnboardStatus = async () => {
    const response = await fetch(
      `https://int.quadrata.com/api/v1/attributes/onboard_status?wallet=${account}&chainId=${chainId}&attributes=${requiredAttributes
        .map((attr) => attr.toLowerCase())
        .join(",")}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiAccessToken}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("/attributes/onboard_status Failed");
    }
    return (await response.json()) as AttributeOnboardStatusDto;
  };

  useQuery("QUAD_API_ATTR_ONBOARD_STATUS", apiAttributesOnboardStatus, {
    enabled: apiAccessToken !== "",
    onSuccess: (data) => {
      console.log(data); // Log the data object
      const { toClaim } = data.data;
      setAttributesToClaim(toClaim);
    },
    onError: (err) => {
      console.error(`/attributes/onboard_status error: ${err}`);
    },
    retry: false,
  });

  // Claim Passport on-chain
  const { config } = usePrepareContractWrite({
    abi: QUAD_PASSPORT_ABI,
    args: mintParams
      ? [mintParams.params, mintParams.signaturesIssuers, mintParams.signatures]
      : undefined,
    address: QUAD_PASSPORT_ADDRESS,
    enabled: Boolean(mintParams),
    overrides: {
      value: mintParams?.fee || parseUnits("0"),
    },
    functionName: "setAttributesBulk",
  });

  const { data, write } = useContractWrite(config);

  useWaitForTransaction({
    hash: data?.hash,
    onSuccess() {
      setMintComplete(true);
      setMintParams(undefined);
    },
  });

  // Handlers

  const handleSign = async (message: string) => {
    // User clicked the initial sign button
    // Signing the message and updating state.
    // Will navigate to the next step upon signature update

    if (signer && account) {
      console.log("Signing");
      const signature = await signer.signMessage({ message });
      setSignature(signature);
    }
  };

  const handlePageChange = (page: Page) => {
    if (page === Page.INTRO && signature) {
      // Intro page navigation will get triggered when a different wallet is detected,
      // Resetting previous signature if present.
      setSignature(undefined);
    }
  };

  const handleMintParamsReady: QuadClientMintParamsReadyCallback = (
    mintParams
  ) => {
    // Setting mint params to prepare the write function
    setMintParams(mintParams);
  };

  const handleMintClick = async () => {
    // Prompting mint transaction
    write?.();
  };

  // if (!!attributesToClaim.length) {
  //   console.log(attributesToClaim);

  //   // User has all required attributes
  //   return <h1>Welcome!</h1>;
  // }

  // User is missing at least one attribute,
  // Onboarding user
  return (
    <>
      <nav className="navbar">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </a>
        <div className="tokensale-nav-right">
          <ConnectButton accountStatus="address" />
          <a href="/dashboard">
            <div className="profile-img"></div>
          </a>
        </div>
      </nav>
      {/* {!account ? <p>Connect Wallet</p> : ""}
      {isConnecting ? <p>loading...</p> : ""} */}
      {account
        ? attributesToClaim.length > 0 && (
            <QuadClient
              account={account}
              config={quadConfig}
              accessToken={apiAccessToken}
              chainId={chainId}
              onSign={handleSign}
              signature={signature}
              attributes={attributesToClaim}
              onMintClick={handleMintClick}
              mintComplete={mintComplete}
              onPageChange={handlePageChange}
              transactionHash={data?.hash}
              onMintParamsReady={handleMintParamsReady}
              darkMode={false}
              onHide={() => setShowClient(false)}
            ></QuadClient>
          )
        : ""}
    </>
  );
};
