import React from "react";

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <p className="text-gray-400">Effective Date: 18 March 2026</p>

        <section>
          <h2 className="text-2xl font-semibold">1. Scope of Services</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Music education</li>
            <li>Studio services</li>
            <li>Events & performances</li>
            <li>Café entertainment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Enrollment & Payments</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Full payment required</li>
            <li>Registration fees non-refundable</li>
            <li>No installment options</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Cancellation & Refund</h2>
          <p className="text-gray-300">
            Fees may be non-refundable depending on service stage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Provide accurate information</li>
            <li>Maintain discipline</li>
            <li>Respect staff</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <p className="text-gray-300">
            Content created by Raag Music remains its property unless agreed otherwise.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Performance Disclaimer</h2>
          <p className="text-gray-300">
            Progress depends on individual effort. Certificates not guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Media Consent</h2>
          <p className="text-gray-300">
            Content may be recorded and used for promotion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Code of Conduct</h2>
          <p className="text-gray-300">
            Misconduct or illegal activity may result in termination.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p className="text-gray-300">
            We are not responsible for injuries, loss, or interruptions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Termination</h2>
          <p className="text-gray-300">
            Services may be suspended for violations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">11. Governing Law</h2>
          <p className="text-gray-300">
            Governed by laws of India, jurisdiction Raipur.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">12. Contact</h2>
          <p className="text-gray-300">
            Raag Music, Raipur, India<br />
            Phone: +91 9827958545
          </p>
        </section>

      </div>
    </div>
  );
};

export default TermsOfUse;