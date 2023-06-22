import React from "react";
import "./privacypolicy.css";

function ProvacyPolicy() {
  return (
    <div id="privacy">
      <div className="heading days-one">
        <h1>Privacy Policy</h1>
      </div>
      <div className="info">
        <p>
          <p>
            Introduction: [Loop Of Infinity] is committed to protecting the
            privacy and personal information of users of Loop of Infinity, our
            blockchain-based play-to-earn game integrated with a loss-proof DEX.
            This Privacy Policy outlines how we collect, use, disclose, and
            protect the information we gather from users. By accessing and using
            our platform, you agree to the terms and practices described in this
            policy.
          </p>
        </p>
      </div>
      <div className="info-1">
        <div className="each-info">
          <h3 className="days-one">Information We Collect:</h3>
          <ol>
            <li>
              Personal Information: We may collect personal information such as
              your name, email address, and other contact details when you
              register an account or interact with our platform. This
              information is necessary to provide you with access to our
              services and for account management purposes.
            </li>
            <li>
              Financial Information: In order to facilitate transactions and
              provide the loss-proof feature of our DEX, we may collect
              financial information, including cryptocurrency wallet addresses
              and transaction history. This information is securely stored and
              used solely for transaction processing purposes.
            </li>
            <li>
              Gameplay and Usage Data: We may collect information related to
              your gameplay activities, including game preferences, in-game
              achievements, and usage patterns. This data helps us improve and
              personalize your gaming experience.
            </li>
            <li>
              {" "}
              Device and Log Information: When you access Loop of Infinity, we
              may collect device information, IP addresses, browser type, and
              other technical details. This information helps us ensure system
              security, analyze usage patterns, and improve our services.
            </li>
          </ol>
        </div>
        <div className="each-info">
          <h3 className="days-one">How We Use Your Information:</h3>
          <ol>
            <li>
              Provide and Improve Services: We use the collected information to
              deliver and enhance your gaming experience on Loop of Infinity.
              This includes providing access to game features, processing
              transactions, personalizing content, and optimizing our platform's
              performance.
            </li>
            <li>
              Communicate with Users: We may use your contact information to
              send you important updates, notifications, and relevant marketing
              communications about our services. You can opt out of promotional
              communications at any time.
            </li>
            <li>
              Legal and Security Purposes: We may use your information to comply
              with applicable laws, regulations, or legal processes.
              Additionally, we employ measures to safeguard our platform and
              users against fraud, unauthorized access, and other security
              threats.
            </li>
          </ol>
        </div>
        <div className="each-info">
          <h3 className="days-one">Information Sharing and Disclosure:</h3>
          <ol>
            <li>
              Service Providers: We may engage trusted third-party service
              providers to assist us in delivering our services. These providers
              are bound by confidentiality agreements and will only have access
              to the information necessary to perform their designated
              functions.
            </li>
            <li>
              Compliance with Law: We may disclose your information when
              required to comply with legal obligations, protect our rights, or
              respond to valid requests from law enforcement or regulatory
              authorities.
            </li>
            <li>
              Aggregated or Anonymized Data: We may share aggregated or
              anonymized data with third parties for statistical analysis,
              research, or marketing purposes. This information does not
              identify individual users.
            </li>
          </ol>
        </div>
      </div>
      <div className="info-3">
        <p>
          <b>Data Retention:</b> We retain your personal information for as long
          as necessary to fulfill the purposes outlined in this Privacy Policy,
          unless a longer retention period is required or permitted by law.
        </p>
        <p>
          <b>Data Retention:</b> We retain your personal information for as long
          as necessary to fulfill the purposes outlined in this Privacy Policy,
          unless a longer retention period is required or permitted by law.
        </p>
        <p>
          <b>Data Security :</b> We implement industry-standard security
          measures to protect your personal information from unauthorized
          access, alteration, disclosure, or destruction. However, please note
          that no data transmission or storage method is completely secure, and
          we cannot guarantee the absolute security of your information.
        </p>
        <p>
          <b>Children's Privacy :</b>Loop of Infinity is not intended for
          individuals under the age of [insert minimum age requirement]. We do
          not knowingly collect personal information from children. If you
          believe that we have inadvertently collected information from a child,
          please contact us immediately
        </p>
        <p>
          <b>Updates to Privacy Policy:</b>We may update this Privacy Policy
          from time to time. The most current version will be posted on our
          platform, and we encourage you to review it periodically. Your
          continued use of Loop of Infinity after the effective date of any
          changes signifies your acceptance of the updated Privacy Policy.
        </p>
        <p>
          <b>Contact Us:</b> If you have any questions, concerns, or requests
          regarding our Privacy Policy or the handling of your personal
          information, please contact us at business@loopofinfinity.com [Loop Of
          Infinity]
        </p>
      </div>
    </div>
  );
}

export default ProvacyPolicy;
