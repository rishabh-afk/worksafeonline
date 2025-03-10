// import { Get } from "@/api/generalApi";

import { bigShoulders } from "../layout";

export async function generateMetadata() {
  const pageData: any = {};
  return {
    title: pageData?.title ?? "Worksafe Direct | Privacy Policy",
    keywords: pageData?.keyword,
    description: pageData?.descriptions,
    alternates: {
      canonical: " https://www.worksafeonline.co.uk/privacy-policy",
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
    icons: {
      icon: "/logo.ico", // Path to your favicon
      shortcut: "/logo.ico", // Optional: Shortcut icon for browsers
      apple: "/logo.ico", // Optional: Apple touch icon
    },
  };
}

const PrivacyPolicy: React.FC = () => {
  const tableData = [
    {
      purpose: "To register you as a new customer",
      typeOfData: ["Identity", "Contact"],
      lawfulBasis: "Performance of a contract with you",
    },
    {
      purpose:
        "To process and deliver your order including:\n(a) Manage payments, fees and charges\n(b) Collect and recover money owed to us\n(c) Where necessary, notifying our suppliers to deliver products directly to you.",
      typeOfData: [
        "Identity",
        "Contact",
        "Financial",
        "Transaction",
        "Marketing and Communications",
      ],
      lawfulBasis:
        "(a) Performance of a contract with you\n(b) Necessary for our legitimate interests (to recover debts due to us)\n(c) Performance of a contract with you",
    },
    {
      purpose:
        "To manage our relationship with you which will include:\n(a) Notifying you about changes to our terms or privacy policy\n(b) Asking you to leave a review or take a survey",
      typeOfData: [
        "Identity",
        "Contact",
        "Profile",
        "Marketing and Communications",
      ],
      lawfulBasis:
        "(a) Performance of a contract with you\n(b) Necessary to comply with a legal obligation\n(c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)",
    },
    {
      purpose:
        "To enable you to partake in a prize draw, competition or complete a survey",
      typeOfData: [
        "Identity",
        "Contact",
        "Profile",
        "Usage",
        "Marketing and Communications",
      ],
      lawfulBasis:
        "(a) Performance of a contract with you\n(b) Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business)",
    },
    {
      purpose:
        "To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)",
      typeOfData: ["Identity", "Contact", "Technical"],
      lawfulBasis:
        "(a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)\n(b) Necessary to comply with a legal obligation",
    },
    {
      purpose:
        "To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you	",
      typeOfData: [
        "Identity",
        "Contact",
        "Profile",
        "Usage",
        "Marketing and Communications",
        "Technical",
      ],
      lawfulBasis:
        "Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)",
    },
    {
      purpose:
        "To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.	",
      typeOfData: ["Technical", "Usage"],
      lawfulBasis:
        "Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy",
    },
    {
      purpose:
        "To make suggestions and recommendations to you about goods or services that may be of interest to you",
      typeOfData: [
        "Identity",
        "Contact",
        "Technical",
        "Usage",
        "Profile",
        "Marketing and Communications	",
      ],
      lawfulBasis:
        "Necessary for our legitimate interests (to develop our products/services and grow our business)",
    },
  ];

  return (
    <div className="bg-white max-w-9xl font-sans mx-auto px-4 md:px-6 lg:px-10 pb-6">
      <div>
        <h1
          className={`pt-6 font-castoro text-4xl font-extrabold ${bigShoulders.className}`}
        >
          Privacy Policy
        </h1>
        <section className="my-5 pb-5">
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Introduction
          </h2>
          <p>
            Welcome to Worksafe Direct (UK) Limited (company number: 07995116)
            trading as Worksafe and WorksafeOnline and whose registered office
            is at St James Road, St James Industrial Estate, Corby,
            Northamptonshire, NN18 8A (the Company)&apos;s privacy policy.
          </p>

          <p className="pt-5">
            The Company respects your privacy and is committed to protecting
            your personal data. This privacy policy will inform you as to how we
            look after your personal data when you visit our website (regardless
            of where you visit it from) and tell you about your privacy rights
            and how the law protects you.
          </p>
        </section>

        <section className="mb-5">
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Purpose of this Privacy Policy
          </h2>
          <p>
            This privacy policy aims to give you information on how the Company
            collects and processes your personal data through your use of this
            website, including, any data you may provide to us through this
            website, for example, when you sign up to our newsletter, purchase a
            product or service, or take part in a competition.
          </p>

          <p className=" py-5">
            This website is not intended for children and we do not knowingly
            collect data relating to children.
          </p>
          <p>
            It is important that you read this privacy policy together with any
            other privacy policy or fair processing policy we may provide on
            specific occasions when we are collecting or processing personal
            data about you so that you are fully aware of how and why we are
            using your data. This privacy policy supplements other notices and
            privacy policies and is not intended to override them.
          </p>
        </section>

        <section className="mb-5">
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Controller
          </h2>
          <p>
            {` The Company is the controller and responsible for your personal data
            (collectively referred to as "we", "us" or "our" in this privacy
            policy).`}
          </p>
          <p className="pt-5">
            We have appointed a Compliance Manager who is responsible for
            overseeing questions in relation to this privacy policy. If you have
            any questions about this privacy policy, including any requests to
            exercise your legal rights, please contact the Compliance Manager
            using the details set out below.
          </p>
        </section>

        <section className="mb-5 ">
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Contact Details
          </h2>
          <div>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact our Compliance Manager in the following
              ways:
            </p>
            <br />
            Name of Compliance Manger: Matthew Stevens
            <br />
            Full name of legal entity: Worksafe Direct (UK) Limited (company
            number: 07995116)
            <br />
            Email address: Matt@worksafeonline.co.uk
            <br />
            Postal Address: St James Road, St James Industrial Estate, Corby,
            Northamptonshire, NN18 8AL
            <br />
            Telephone: 01536 203888
          </div>
          <p className="mt-4">
            {` You have the right to make a complaint at any time to the
            Information Commissioner's Office (ICO), the UK supervisory
            authority for data protection issues (www.ico.org.uk). We would,
            however, appreciate the chance to deal with your concerns before you
            approach the ICO so please contact us in the first instance.`}
          </p>
        </section>

        <section className="my-5">
          <h2
            className={`text-2xl tracking-wide font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Changes to the privacy policy and your duty to inform us of changes{" "}
          </h2>
          <p>
            We keep our privacy policy under regular review. It is important
            that the personal data we hold about you is accurate and current.
            Please keep us informed if your personal data changes during your
            relationship with us.
          </p>
        </section>
      </div>
      <div>
        <div className="mb-4">
          <h2
            className={`text-2xl tracking-wide font-bold text-gray-800 mb-1  ${bigShoulders.className}`}
          >
            Third-party links
          </h2>
          <p>
            This website may include links to third-party websites, plug-ins and
            applications. Clicking on those links or enabling those connections
            may allow third parties to collect or share data about you. We do
            not control these third-party websites and are not responsible for
            their privacy statements. When you leave our website, we encourage
            you to read the privacy policy of every website you visit.
          </p>
        </div>

        <h3
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          1. The data we collect about you
        </h3>

        <p className="mb-4">
          Personal data, or personal information, means any information about an
          individual from which that person can be identified. It does not
          include data where the identity has been removed (anonymous data).
        </p>

        <p className="mb-4">
          We may collect, use, store and transfer different kinds of personal
          data about you which we have grouped together as follows:
        </p>
        <ul className="list-inside list-disc mb-4">
          <li>
            Identity Data first name, maiden name, last name, username or
            similar identifier, marital status, title, date of birth, and
            gender.
          </li>
          <li>
            Data billing address, delivery address, email address, and telephone
            numbers.
          </li>
          <li>Financial Data bank account and payment card details.</li>
          <li>
            Transaction Data details about payments to and from you and other
            details of products and services you have purchased from us.
          </li>
          <li>
            Technical Data internet protocol (IP) address, your login data,
            browser type and version, time zone setting and location, browser
            plug-in types and versions, operating system and platform, and other
            technology on the devices you use to access this website.
          </li>
          <li>
            Profile Data: your username and password, purchases or orders made
            by you, your interests, preferences, feedback, and survey responses.
          </li>
          <li>
            Usage Data information about how you use our website, products, and
            services.
          </li>
          <li>
            Marketing and Communications Data: your preferences in receiving
            marketing from us and our third parties and your communication
            preferences.
          </li>
        </ul>

        <p className="mb-4">
          We also collect, use, and share Aggregated Data such as statistical or
          demographic data for any purpose. Aggregated Data could be derived
          from your personal data but is not considered personal data in law as
          this data will not directly or indirectly reveal your identity. For
          example, we may aggregate your Usage Data to calculate the percentage
          of users accessing a specific website feature. However, if we combine
          or connect Aggregated Data with your personal data so that it can
          directly or indirectly identify you, we treat the combined data as
          personal data which will be used in accordance with this privacy
          policy.
        </p>

        <p className="mb-4">
          We do not collect any Special Categories of Personal Data about you
          (this includes details about your race or ethnicity, religious or
          philosophical beliefs, sex life, sexual orientation, political
          opinions, trade union membership, information about your health, and
          genetic and biometric data). Nor do we collect any information about
          criminal convictions and offences.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          If you fail to provide personal data
        </h3>
        <p className="mb-4">
          Where we need to collect personal data by law, or under the terms of a
          contract we have with you, and you fail to provide that data when
          requested, we may not be able to perform the contract we have or are
          trying to enter into with you (for example, to provide you with goods
          or services). In this case, we may have to cancel a product or service
          you have with us but we will notify you if this is the case at the
          time.
        </p>

        <h3
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          2. How is your personal data collected?
        </h3>
        <p className="mb-4">
          We use different methods to collect data from and about you including
          through:
        </p>
        <ul className=" mb-4 space-y-4">
          <div>
            <strong className="text-lg tracking-wide">
              (a) Direct interactions:
            </strong>
            <span>
              {" "}
              You may give us your Identity, Contact and Financial Data by
              filling in forms or by corresponding with us by post, phone, email
              or otherwise. This includes personal data you provide when you:
            </span>
            <li className="my-4">
              <ul className="list-inside list-disc">
                <li>apply for our products or services;</li>
                <li>create an account on our website;</li>
                <li>subscribe to our service or publications;</li>
                <li>request marketing to be sent to you;</li>
                <li>enter a competition, promotion or survey;</li>
                <li>give us feedback or contact us.</li>
              </ul>
            </li>
          </div>
          <div>
            <strong className="text-lg tracking-wide ">
              (b) Automated technologies or interactions:
            </strong>{" "}
            <li>
              As you interact with our website, we will automatically collect
              Technical Data about your equipment, browsing actions and
              patterns. We collect this personal data by using cookies, server
              logs and other similar technologies. We may also receive Technical
              Data about you if you visit other websites employing our cookies.
            </li>
          </div>
          <div>
            <strong className="text-lg tracking-wide pt-4">
              (c) Third parties or publicly available sources:
            </strong>{" "}
            <li>
              <span>
                {" "}
                We will receive personal data about you from various third
                parties and public sources as set out below:
              </span>
              <p>Technical Data from the following parties:</p>
              <ul className="list-inside list-disc">
                <li>
                  Analytics providers such as Google based outside the EU;
                </li>
                <li>Advertising networks; and</li>
                <li> Search information providers.</li>
                <li>
                  Contact Financial and Transaction Data from providers of
                  technical, payment and delivery services;
                </li>
                <li>
                  Identity and Contract Date from data brokers or aggregators;
                  and
                </li>
                <li>
                  Identity and Contact Data from publicly available sources.
                </li>
              </ul>
            </li>
          </div>
        </ul>

        <h3
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          3. How is your personal data collected?
        </h3>
        <p className="mb-4">
          We will only use your personal data when the law allows us to. Most
          commonly, we will use your personal data in the following
          circumstances:
        </p>
        <ul className="list-inside list-disc">
          <li>
            Where we need to perform the contract we are about to enter into or
            have entered into with you.
          </li>

          <li>
            Where it is necessary for our legitimate interests (or those of a
            third party) and your interests and fundamental rights do not
            override those interests.
          </li>

          <li>Where we need to comply with a legal obligation.</li>
        </ul>
        <p>
          Generally, we do not rely on consent as a legal basis for processing
          your personal data although we will get your consent before sending
          third party direct marketing communications to you via email or text
          message. You have the right to withdraw consent to marketing at any
          time by contacting us.
        </p>

        <h3 className="text-xl font-semibold my-3">What is a lawful basis?</h3>
        <p className="mb-4">
          <strong className="mb-3">Legitimate Interest </strong>
          means the interest of our business in conducting and managing our
          business to enable us to give you the best service/product and the
          best and most secure experience. We make sure we consider and balance
          any potential impact on you (both positive and negative) and your
          rights before we process your personal data for our legitimate
          interests. We do not use your personal data for activities where our
          interests are overridden by the impact on you (unless we have your
          consent or are otherwise required or permitted to by law). You can
          obtain further information about how we assess our legitimate
          interests against any potential impact on you in respect of specific
          activities by contacting us.
        </p>

        <p className="mb-4">
          <strong className="mb-3">Performance of Contract </strong>
          Comply with a legal obligation means processing your personal data
          where it is necessary for compliance with a legal obligation that we
          are subject to.
        </p>

        <p className="mb-4">
          <strong className="mb-3">Comply with a legal obligation </strong>
          means processing your personal data where it is necessary for
          compliance with a legal obligation that we are subject to.
        </p>

        <h3 className="text-xl font-semibold mb-3">
          Purposes for which we will use your personal data
        </h3>
        <p className="mb-4">
          We have set out below, in a table format, a description of all the
          ways we plan to use your personal data, and which of the legal bases
          we rely on to do so. We have also identified what our legitimate
          interests are where appropriate.
        </p>

        <p className="mb-4">
          Note that we may process your personal data for more than one lawful
          ground depending on the specific purpose for which we are using your
          data. Please contact us if you need details about the specific legal
          ground we are relying on to process your personal data where more than
          one ground has been set out in the table below.
        </p>
      </div>

      <div className="overflow-x-auto my-4 shadow-md border border-gray-300 rounded-lg mx-4">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-sm md:text-base">
                Purpose/Activity
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-sm md:text-base">
                Type of Data
              </th>
              <th className="border border-gray-300 px-2 py-2 text-left font-semibold text-sm md:text-base">
                Lawful basis for processing including basis of legitimate
                interest
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base whitespace-pre-wrap">
                  {row.purpose}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base">
                  <ul className="list-disc pl-5">
                    {row.typeOfData.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm md:text-base whitespace-pre-wrap">
                  {row.lawfulBasis}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="space-y-4">
        <div>
          <h3
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Marketing
          </h3>
          <p>
            We strive to provide you with choices regarding certain personal
            data uses, particularly around marketing and advertising.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Promotional Offers from Us
          </h2>
          <p>
            We may use your Identity, Contact, Technical, Usage, and Profile
            Data to form a view on what we think you may want or need, or what
            may be of interest to you. This is how we decide which products,
            services, and offers may be relevant for you (we call this
            marketing).
          </p>
          <p className="mt-4">
            You will receive marketing communications from us if you have
            requested information from us or purchased goods or services from us
            and you have not opted out of receiving that marketing.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Third-Party Marketing
          </h2>
          <p>
            We will get your express opt-in consent before we share your
            personal data with any third party for marketing purposes.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Opting Out
          </h2>
          <p>
            You can ask us or third parties to stop sending you marketing
            messages at any time by contacting us at any time. Where you opt out
            of receiving these marketing messages, this will not apply to
            personal data provided to us as a result of a product/service
            purchase, warranty registration, product/service experience, or
            other transactions.
          </p>
        </div>

        <div id="cookies">
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Cookies
          </h2>
          <p>
            You can set your browser to refuse all or some browser cookies, or
            to alert you when websites set or access cookies. If you disable or
            refuse cookies, please note that some parts of this website may
            become inaccessible or not function properly.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Change of Purpose
          </h2>
          <p>
            We will only use your personal data for the purposes for which we
            collected it, unless we reasonably consider that we need to use it
            for another reason and that reason is compatible with the original
            purpose. If you wish to get an explanation as to how the processing
            for the new purpose is compatible with the original purpose, please
            contact us.
          </p>

          <p className="mt-4">
            If we need to use your personal data for an unrelated purpose, we
            will notify you and we will explain the legal basis which allows us
            to do so.
          </p>
          <p className="mt-4">
            Please note that we may process your personal data without your
            knowledge or consent, in compliance with the above rules, where this
            is required or permitted by law.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            4. Disclosures of Your Personal Data
          </h2>
          <p>
            We may share your personal data with the parties set out below for
            the purposes set out in the table above.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            Internal Third Parties{" "}
          </h2>
          <p>
            Other companies or entities, which the shareholders of the Company
            have an interest A14 Supplies Ltd and Maskearid Ltd.
          </p>
        </div>

        <div>
          <h2
            className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
          >
            External Third Parties
          </h2>
          <div>
            <ol className="pl-5 list-disc">
              <li>Suppliers, such as Polyco Healthline;</li>
              <li>
                Service providers, such as IT, telephone or administrative
                support;
              </li>
              <li>Marketing providers;</li>
              <li> {`Ongoing security of systems and data;`}</li>
              <li>
                Professional advisers, including lawyers, bankers, auditors and
                insurers etc;
              </li>
              <li>HM Revenue & Customs, regulators and other authorities;</li>
              <li> Any third parties listed in the table above.</li>
              <li>
                Third parties to whom we may choose to sell, transfer or merge
                parts of our business or our assets. Alternatively, we may seek
                to acquire other businesses or merge with them. If a change
                happens to our business, then the new owners may use your
                personal data in the same way as set out in this privacy policy.
              </li>
            </ol>
            <p className="pt-4">
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law. We do
              not allow our third-party service providers to use your personal
              data for their own purposes and only permit them to process your
              personal data for specified purposes and in accordance with our
              instructions.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          5. International transfers
        </h2>
        <p>
          We do not transfer your personal data outside the European Economic
          Area (EEA).
        </p>
      </div>
      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          6. Data security
        </h2>
        <p>
          We have put in place appropriate security measures to prevent your
          personal data from being accidentally lost, used or accessed in an
          unauthorised way, altered or disclosed. In addition, we limit access
          to your personal data to those employees, agents, contractors and
          other third parties who have a business need to know. They will only
          process your personal data on our instructions and they are subject to
          a duty of confidentiality.
        </p>
        <p className="mt-4">
          We have put in place procedures to deal with any suspected personal
          data breach and will notify you and any applicable regulator of a
          breach where we are legally required to do so..
        </p>
      </div>
      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          7. Data Retention
        </h2>
        <h2
          className={`text-2xl font-bold text-gray-800 mb-2 ${bigShoulders.className}`}
        >
          How long will you use my personal data for?
        </h2>
        <p>
          We will only retain your personal data for as long as reasonably
          necessary to fulfil the purposes we collected it for, including for
          the purposes of satisfying any legal, regulatory, tax, accounting or
          reporting requirements. We may retain your personal data for a longer
          period in the event of a complaint or if we reasonably believe there
          is a prospect of litigation in respect to our relationship with you.
        </p>

        <p className="mt-4">
          To determine the appropriate retention period for personal data, we
          consider the amount, nature and sensitivity of the personal data, the
          potential risk of harm from unauthorised use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal, regulatory, tax, accounting or other requirements.
        </p>
        <p className="mt-4">
          Details of retention periods for different aspects of your personal
          data are available in our retention policy which you can request from
          us by contacting us.
        </p>

        <p className="mt-4">
          By law we have to keep basic information about our customers
          (including Contact, Identity, Financial and Transaction Data) for six
          years after they cease being customers for tax and legal purposes.
        </p>

        <p className="mt-4">
          In some circumstances you can ask us to delete your data: see your
          legal rights below for further information.
        </p>

        <p className="mt-4">
          In some circumstances we will anonymise your personal data (so that it
          can no longer be associated with you) for research or statistical
          purposes, in which case we may use this information indefinitely
          without further notice to you.
        </p>
      </div>
      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
        >
          8. Your Legal Rights
        </h2>
        <p>
          Under certain circumstances, you have rights under data protection
          laws in relation to your personal data.
        </p>
      </div>
      <div className="mt-4">
        <h1
          className={`text-2xl font-bold text-gray-800 ${bigShoulders.className}`}
        >
          YOUR LEGAL RIGHTS
        </h1>
        <p>You have the right to:</p>
      </div>
      <ul className="list-disc pl-5 mt-4 space-y-4">
        <li>
          <span className="font-semibold tracking-wide">Request access</span> to
          your personal data (commonly known as a{" "}
          <span className="italic">{`"data subject access request"`}</span>).
          This enables you to receive a copy of the personal data we hold about
          you and to check that we are lawfully processing it.
        </li>
        <li>
          <span className="font-semibold tracking-wide">
            Request correction
          </span>{" "}
          of the personal data that we hold about you. This enables you to have
          any incomplete or inaccurate data we hold about you corrected, though
          we may need to verify the accuracy of the new data you provide to us.
        </li>
        <li>
          <span className="font-semibold tracking-wide">Request erasure</span>{" "}
          of your personal data. This enables you to ask us to delete or remove
          personal data where there is no good reason for us continuing to
          process it. You also have the right to ask us to delete or remove your
          personal data where you have successfully exercised your right to
          object to processing (see below), where we may have processed your
          information unlawfully, or where we are required to erase your
          personal data to comply with local law. Note, however, that we may not
          always be able to comply with your request of erasure for specific
          legal reasons which will be notified to you, if applicable, at the
          time of your request.
        </li>
        <li>
          <span className="font-semibold tracking-wide">
            Object to processing
          </span>{" "}
          of your personal data where we are relying on a legitimate interest
          (or those of a third party) and there is something about your
          particular situation which makes you want to object to processing on
          this ground as you feel it impacts your fundamental rights and
          freedoms. You also have the right to object where we are processing
          your personal data for direct marketing purposes. In some cases, we
          may demonstrate that we have compelling legitimate grounds to process
          your information which override your rights and freedoms.
        </li>
        <li>
          <span className="font-semibold tracking-wide">
            Request restriction of processing
          </span>{" "}
          of your personal data. This enables you to ask us to suspend the
          processing of your personal data in the following scenarios:
          <ul className="list-decimal pl-8 space-y-2 mt-2">
            <li>{`If you want us to establish the data's accuracy.`}</li>
            <li>
              Where our use of the data is unlawful but you do not want us to
              erase it.
            </li>
            <li>
              Where you need us to hold the data even if we no longer require it
              as you need it to establish, exercise, or defend legal claims.
            </li>
            <li>
              You have objected to our use of your data but we need to verify
              whether we have overriding legitimate grounds to use it.
            </li>
          </ul>
        </li>
        <li>
          <span className="font-semibold tracking-wide">
            Request the transfer
          </span>{" "}
          of your personal data to you or to a third party. We will provide to
          you, or a third party you have chosen, your personal data in a
          structured, commonly used, machine-readable format. Note that this
          right only applies to automated information which you initially
          provided consent for us to use or where we used the information to
          perform a contract with you.
        </li>
        <li>
          <span className="font-semibold tracking-wide">
            Withdraw consent at any time
          </span>{" "}
          where we are relying on consent to process your personal data.
          However, this will not affect the lawfulness of any processing carried
          out before you withdraw your consent. If you withdraw your consent, we
          may not be able to provide certain products or services to you. We
          will advise you if this is the case at the time you withdraw your
          consent. If you wish to exercise any of the rights set out above,
          please contact us.
        </li>
      </ul>
      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          No Fee Usually Required
        </h2>
        <p className=" mb-4">
          You will not have to pay a fee to access your personal data (or to
          exercise any of the other rights). However, we may charge a reasonable
          fee if your request is clearly unfounded, repetitive, or excessive.
          Alternatively, we could refuse to comply with your request in these
          circumstances.
        </p>
      </div>
      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          What We May Need From You
        </h2>
        <p>
          We may need to request specific information from you to help us
          confirm your identity and ensure your right to access your personal
          data (or to exercise any of your other rights). This is a security
          measure to ensure that personal data is not disclosed to any person
          who has no right to receive it. We may also contact you to ask for
          further information in relation to your request to speed up our
          response.
        </p>
      </div>
      <div className="mt-4">
        <h2
          className={`text-2xl font-bold text-gray-800 mb-1 ${bigShoulders.className}`}
        >
          Time Limit to Respond
        </h2>
        <p>
          We try to respond to all legitimate requests within one month.
          Occasionally it could take us longer than a month if your request is
          particularly complex or you have made a number of requests. In this
          case, we will notify you and keep you updated.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
