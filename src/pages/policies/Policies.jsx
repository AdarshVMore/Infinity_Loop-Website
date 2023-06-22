import React from "react";
import "./policies.css";
import PoliciesNav from "./PoliciesNav";
import AML from "../../components/AML/AML";
import ProvacyPolicy from "../../components/PrivacyPolicy/ProvacyPolicy";
import TermsofServices from "../../components/TermsofServices/TermsofServices";
import Disclaimer from "../../components/disclaimer/Disclaimer";

function Policies() {
  return (
    <div>
      <PoliciesNav />
      <div className="policies-maincontainer">
        <AML />
        <ProvacyPolicy />
        <TermsofServices />
        <Disclaimer />
      </div>
    </div>
  );
}

export default Policies;
