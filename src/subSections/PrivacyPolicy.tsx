import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-400">Effective Date: 18 March 2026</p>

        <p className="text-gray-300">
          Raag Music (“we,” “our,” or “us”) operates a music and cultural ecosystem
          based in Raipur, Chhattisgarh, including Raag Music Academy, Raag Studio,
          Raag Music Café, Raag Foundation, Raag Events, and Raag – The Band.
        </p>

        <p className="text-gray-300">
          We are committed to protecting your personal information and ensuring
          transparency in how we collect and use your data.
        </p>

        <section>
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>

          <p className="mt-4 font-semibold">Personal Information</p>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Address</li>
            <li>Booking or registration details</li>
          </ul>

          <p className="mt-4 text-gray-300">
            This information is collected when you enroll in classes, book services,
            contact us, or participate in programs.
          </p>

          <p className="mt-4 font-semibold">Service & Usage Data</p>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Class attendance and participation</li>
            <li>Event bookings and preferences</li>
            <li>Studio service requirements</li>
            <li>Website/device usage data</li>
          </ul>

          <p className="mt-4 font-semibold">Payment Information</p>
          <p className="text-gray-300">
            Payments are required in full at admission. We do not store sensitive
            payment data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Provide music education and training</li>
            <li>Manage bookings and events</li>
            <li>Organize programs and performances</li>
            <li>Communicate updates</li>
            <li>Improve services</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Sharing of Information</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Internal departments</li>
            <li>Event collaborators</li>
            <li>Legal authorities if required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Media & Content Usage</h2>
          <p className="text-gray-300">
            Participation implies consent for recording and promotional use of
            photos/videos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Data Security</h2>
          <p className="text-gray-300">
            We take reasonable measures to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Your Rights</h2>
          <ul className="list-disc ml-6 text-gray-300">
            <li>Access your data</li>
            <li>Update/correct information</li>
            <li>Request deletion</li>
            <li>Opt out of communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Children’s Privacy</h2>
          <p className="text-gray-300">
            Data of minors is collected only with guardian consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">8. Retention of Data</h2>
          <p className="text-gray-300">
            Data is retained as required for services and legal purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">9. Changes to Policy</h2>
          <p className="text-gray-300">
            Continued use implies acceptance of updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">10. Contact Information</h2>
          <p className="text-gray-300">
            Raag Music<br />
            26 South Avenue, Choubey Colony<br />
            Raipur, Chhattisgarh – 492001<br />
            Phone: +91 9827958545<br />
            Website: www.raagmusic.in
          </p>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;