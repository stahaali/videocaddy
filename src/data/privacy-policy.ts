export interface PrivacyBullet {
  title?: string;
  text: string;
}

export interface PrivacySection {
  title: string;
  paragraphs?: string[];
  bullets?: PrivacyBullet[];
  trailingParagraphs?: string[];
}

export const privacyPolicySections: PrivacySection[] = [
  {
    title: "Who We Are",
    paragraphs: [
      'At Video Caddy, we maintain a strict privacy policy to protect the data of all users of our website. This Privacy Policy governs the manner in which Video Caddy collects, uses, maintains, and discloses information collected from users (each, a "User") of the https://www.videocaddy.com website ("Site").',
    ],
  },
  {
    title: "Why Should I Read This?",
    paragraphs: [
      "It's important for each user to study this document in order to grow an understanding of our methods of managing the data exchange with our users, as well as what kind of data we collect, what we do with it, how we secure it, and the processes involving your Personally Identifiable Information (PII). It is vital to understand that your PII is information that can be used to pinpoint an individual, and as such can be leveraged to get in touch with them, or to form impressions about that particular person. Our website also collects and utilizes Non-Identifiable information.",
    ],
  },
  {
    title: "The types of personal information that we collect from visitors to our website",
    paragraphs: [
      "Video Caddy's expertise lets you take on extensive video editing projects without having to scale up your in-house workforce or spend time searching for freelancers. With over a decade of video editing and animation experience, Video Caddy offers more than just editors. We have the tech backbone and support staff to handle all the requirements of your job. Here are some of the advantages of partnering with Video Caddy:",
      "Data is collected throughout the website, and applicable information is requested from users as necessary. This information includes names, email addresses, and telephone numbers, when appropriate. These points of information will not be collected unless users willingly enter them into our website.",
      "It is also possible to remain anonymous on the site. Users reserve the right to withhold any information requested, with the understanding that the usability of the site may be affected with regards to areas which require this information. Every PII data point has been volunteered to us and is not altered in any way.",
    ],
  },
  {
    title: "Do We Collect Any Other Information?",
    paragraphs: [
      "We reserve the right to gather non-personal data from users who make use of our site. This data includes the browser you make use of, your computer type, and the manner in which the site has been accessed, including the user's operating system, internet service providers, along with other related data. Non-personal information is not linked to specific users.",
    ],
  },
  {
    title: "How do We Use Your Information?",
    paragraphs: [
      "Data will be collected as you navigate through our website and make use of various features. This allows us to:",
    ],
    bullets: [
      { text: "Provide a personalized experience; bringing you the most relevant content when you need it." },
      { text: "Identify areas of the website that can be improved." },
      { text: "Respond to service requests from our clients more rapidly." },
      { text: "Create exciting competitions, promotions, feedback surveys and other features." },
      { text: "Communicate with clients and users via email as required." },
      { text: "Carry out client satisfaction measurements after contact has been made via our phone lines, emails, or live chat facility." },
    ],
  },
  {
    title: "How do we protect your information?",
    paragraphs: [
      "On our website, we only provide articles and information. We do not ask for credit card numbers, social security numbers, or other sensitive information. Our data collection, storage, and processing functions are all protected by strict security measures. Our strict security measures prevent outside access, changes, sharing, or removal of our client's PII. All the information collected on the Video Caddy website is kept secure and is regularly audited by our staff and IT personnel. Furthermore, this information is stored in a secure facility that requires credentials for access within our organization. Periodically, the security and privacy guidelines of Video Caddy are reviewed, and changes are made according to specialist recommendations to protect your privacy and security.",
    ],
  },
  {
    title: "Do We Use 'Cookies'?",
    paragraphs: [
      'Our Site makes use of "cookies," to improve usability.',
      "Cookies are defined as tiny files which are transferred to your hard drive by websites or service providers if you allow this. These cookies make it possible for our site to recognize your browser while capturing and remembering certain information. For example, cookies are used to assist in building knowledge of our clients' preferences by taking into account the sites currently being visited, as well as sites that were visited previously, which enables us to provide you with improved services. Cookies are also used to build a generalized understanding about the types of users who visit our site and how they interact with it. This allows us to better serve our clients with the best, most user-friendly site possible. Video Caddy does not store any third-party cookies from our website visitors. Cookies are always saved on the customer's machines.",
      "Users have complete control over cookie settings on their computer. Users may choose to set their web browser to refuse cookies or to alert them each time cookies are being sent. You can do this through your browser settings. Please check your browser's Help Menu to learn how to manage cookie settings. Turning cookies off will result in the reduced function of certain elements of this website.",
    ],
  },
  {
    title: "Third-party Disclosure",
    paragraphs: [
      "We will never trade, sell, or disclose any of our user's PII to outside firms unless our users have been notified first. This excludes our key partners, including site hosting companies and entities that assist with the operation of our website and our primary business. These partners are bound by an agreement of confidentiality and will only make use of data for the stated purposes. Data will be released when appropriately requested by law enforcement, to comply with our site policy, or to protect the safety, rights, and property of our own company, as well as of others. If Video Caddy is sold to a third party, rights will be transferred with the legal guidelines of the transfer so that the third-party understand their legal rights and responsibilities in using that information.",
    ],
  },
  {
    title: "Google Advertising Policy",
    paragraphs: [
      "Video Caddy has enabled Advertising Features in accordance with Google's Advertising Principles. These strict requirements are put in place to provide a positive experience for users. https://support.google.com/adwordspolicy/answer/1316548?hl=en.",
      "Google Advertising Features implemented on our website include:",
    ],
    bullets: [
      { text: "Remarketing with Google AdSense / Analytics" },
      { text: "Google Display Network Impression Reporting" },
      { text: "Demographics and Interests Reporting" },
      { text: "Data Collection via Advertising Cookies" },
    ],
    trailingParagraphs: [
      "In compliance with Google Policies, Video Caddy does not identify users or attempt to merge any personally identifiable information (PII) with non-personally identifiable information gathered through any Google advertising products or features without prior user consent.",
      "Google is an outside entity which uses cookies to determine the ads shown on our website. Google uses DART cookies to present ads that best match your interests, based on your search history. Any visitor to the Video Caddy website who does not wish to participate in the Google Analytics Advertising Features included on our website can use Google's Ads Settings to manage the Google ads they see and opt out of Ads Personalization by using the Google Analytics Opt Out Browser add-on or manage cookies in the browser settings.",
    ],
  },
  {
    title: "Commitment to Legal and Regulatory Compliance",
    paragraphs: [
      "At Video Caddy, we are dedicated to meeting the highest standards of data protection and privacy across all regions where our users reside.",
    ],
    bullets: [
      {
        title: "Global Privacy Law Alignment",
        text: "We comply with international data protection regulations, including GDPR, CCPA, and CPRA, ensuring your personal information is collected, stored, and processed in accordance with globally recognized legal frameworks.",
      },
      {
        title: "Your Rights as a Data Owner",
        text: "We respect your right to know how, where, and why your personal data is stored and processed. You may request a copy of your data or ask for clarification on its use at any time, and we will respond promptly.",
      },
      {
        title: "Privacy by Design",
        text: "We embed data protection safeguards directly into our processes and technology. From the moment we collect your information, we handle it under strict privacy guidelines and adhere to structured data retention schedules to ensure that information is not stored longer than necessary.",
      },
      {
        title: "Data Retention Transparency",
        text: "We define clear timelines for storing personal data and server logs. For example, IP-level logs are retained for no more than 90 days, after which they are either anonymized or securely deleted, unless legally required to retain them for longer.",
      },
    ],
  },
  {
    title: "Data Security and Confidential IP Data Handling",
    paragraphs: [
      "We follow advanced technical and organizational safety measures to protect your data against unauthorized access, misuse, or disclosure. Our initiatives include:",
    ],
    bullets: [
      {
        title: "Clear and Limited Use of IP Data",
        text: "We collect IP addresses only to prevent fraud, diagnose technical issues, and analyze website traffic patterns. Your IP data is never linked to your personal identity or used for profiling.",
      },
      {
        title: "Strong Encryption and Access Controls",
        text: "All personal data you share with us is encrypted during transmission and storage, housed in access-restricted SQL databases, and protected by role-based permissions, ensuring only authorized personnel can view or process it.",
      },
      {
        title: "Certified Data Storage Facilities",
        text: "Your information is stored in ISO- and SOC-certified data centers, maintaining industry-leading standards for physical and digital security.",
      },
      {
        title: "Anonymization of Logs",
        text: "Any IP logs or temporary records we collect are automatically anonymized or permanently deleted after the defined retention period, ensuring no unnecessary long-term tracking or risk of exposure.",
      },
    ],
  },
  {
    title: "External Links",
    paragraphs: [
      "Links posted on Video Caddy to outside resources have not been approved or vetted by our internal team. As such, they may not match our privacy guidelines. We strongly encourage users to read the guidelines of any external pages carefully before proceeding.",
    ],
  },
  {
    title: "Electronic Communication",
    paragraphs: [
      "We comply with the global legislation governing electronic communication and commercial communication. As such, we agree to:",
    ],
    bullets: [
      { text: "Never make use of deceptive email addresses or subject lines." },
      { text: "Indicate the presence of advertisements in a reasonable manner." },
      { text: "Show the company's street address or head office location." },
      { text: "Ensure that any third-party email services meet the necessary legal requirements." },
      { text: "Rapid processing of unsubscribing and opt out requests." },
      { text: "Include a link in each email allowing fast unsubscribing." },
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    paragraphs: [
      "Video Caddy has the discretion to update this privacy policy at any time. When changes are made, an alert will be attached to the main page of our website. Users are encouraged to monitor this page regularly to remain apprised of any changes to our data security measures. By using this site, you confirm that it is your responsibility as the user to monitor this document and remain alert to changes.",
    ],
  },
  {
    title: "Your Acceptance of These Terms",
    paragraphs: [
      "Making use of this website indicates that you agree with our privacy policy. Should you wish to decline this agreement, please refrain from making use of the site. We reserve the right to make any necessary changes to this privacy policy. By opting to continue utilizing the site after these changes have been made, you accept all changes to this document.",
      "Should you have any questions regarding this privacy policy, please get in touch with us.",
    ],
  },
];
