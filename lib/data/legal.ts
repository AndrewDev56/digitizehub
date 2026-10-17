export type LegalBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact"; company: string; email: string; website: string };

export type LegalSection = {
  number: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  kicker: string;
  titleBefore: string;
  accent: string;
  description: string;
  effectiveDate: string;
  intro: string[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  kicker: "Legal",
  titleBefore: "Privacy ",
  accent: "Policy",
  description:
    "How we collect, use, store, and protect the information you share with us.",
  effectiveDate: "9/05/2026",
  intro: [
    "At Digitize Hub, your privacy matters to us. This Privacy Policy explains how we collect, use, store, and protect the information you share with us when you visit our website, fill out a form, request a quote, or communicate with our team.",
    "By using our website, you agree to the practices described in this Privacy Policy.",
  ],
  sections: [
    {
      number: "01",
      title: "Information We Collect",
      blocks: [
        {
          type: "paragraph",
          text: "We may collect personal information when you contact us, submit a form, request a consultation, or communicate with Digitize Hub.",
        },
        {
          type: "paragraph",
          text: "This information may include:",
        },
        {
          type: "list",
          items: [
            "Full name",
            "Email address",
            "Phone number",
            "Company or organization name",
            "Website URL",
            "Project details",
            "Budget or timeline information",
            "Any message or file you choose to share with us",
          ],
        },
        {
          type: "paragraph",
          text: "We may also collect basic technical information such as your browser type, device information, pages visited, time spent on the website, and general location data through analytics tools.",
        },
      ],
    },
    {
      number: "02",
      title: "How We Use Your Information",
      blocks: [
        {
          type: "paragraph",
          text: "We use the information you provide to understand your needs and respond to your requests. This may include:",
        },
        {
          type: "list",
          items: [
            "Responding to inquiries",
            "Preparing project recommendations or proposals",
            "Providing website, branding, SEO, social media, mobile app, or digital marketing services",
            "Improving our website and user experience",
            "Communicating project updates",
            "Sending relevant business or service-related information",
            "Protecting our website from spam, fraud, or misuse",
          ],
        },
        {
          type: "paragraph",
          text: "We do not sell your personal information to third parties.",
        },
      ],
    },
    {
      number: "03",
      title: "Website Analytics And Cookies",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may use cookies and analytics tools to better understand how visitors interact with our pages. Cookies help us improve website performance, track visitor behavior, and create a better browsing experience.",
        },
        {
          type: "paragraph",
          text: "You can choose to disable cookies through your browser settings, but some parts of the website may not function as intended.",
        },
      ],
    },
    {
      number: "04",
      title: "How We Protect Your Information",
      blocks: [
        {
          type: "paragraph",
          text: "We take reasonable steps to protect the personal information you share with us. We use appropriate technical and organizational measures to help prevent unauthorized access, misuse, loss, or disclosure of your data.",
        },
        {
          type: "paragraph",
          text: "However, no online system can be guaranteed completely secure. By using our website, you understand that any information shared online carries some level of risk.",
        },
      ],
    },
    {
      number: "05",
      title: "Sharing Your Information",
      blocks: [
        {
          type: "paragraph",
          text: "We may share limited information with trusted service providers when needed to operate our website, manage communication, analyze performance, or deliver our services.",
        },
        {
          type: "paragraph",
          text: "These third parties may include:",
        },
        {
          type: "list",
          items: [
            "Website hosting providers",
            "Analytics platforms",
            "Email or CRM tools",
            "Payment or invoicing tools",
            "Project management platforms",
            "Technical service providers",
          ],
        },
        {
          type: "paragraph",
          text: "We only share information when it is necessary for business operations or service delivery.",
        },
      ],
    },
    {
      number: "06",
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may include links to third-party websites, tools, or platforms. We are not responsible for the privacy practices, content, or security of those external websites. We recommend reviewing their privacy policies before sharing any personal information.",
        },
      ],
    },
    {
      number: "07",
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          text: "We keep your information only for as long as needed to respond to your request, manage business communication, provide services, meet legal requirements, or maintain internal records.",
        },
        {
          type: "paragraph",
          text: "If you would like us to delete or update your personal information, you can contact us directly.",
        },
      ],
    },
    {
      number: "08",
      title: "Your Rights",
      blocks: [
        {
          type: "paragraph",
          text: "Depending on your location, you may have the right to request access to the personal information we hold about you, ask us to correct it, request deletion, or object to certain uses of your data.",
        },
        {
          type: "paragraph",
          text: "To make a request, please contact us using the details below.",
        },
      ],
    },
    {
      number: "09",
      title: "Children’s Privacy",
      blocks: [
        {
          type: "paragraph",
          text: "Our website and services are intended for businesses and individuals over the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has shared personal information with us, we will take steps to remove it.",
        },
      ],
    },
    {
      number: "10",
      title: "Changes To This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          text: "We may update this Privacy Policy from time to time to reflect changes in our website, services, or business practices. Any updates will be posted on this page with a revised effective date.",
        },
      ],
    },
    {
      number: "11",
      title: "Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have any questions about this Privacy Policy or how your information is handled, you can contact us at:",
        },
        {
          type: "contact",
          company: "Digitize Hub",
          email: "info@digitizehub.net",
          website: "https://digitizehub.net/",
        },
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  kicker: "Legal",
  titleBefore: "Terms and ",
  accent: "Conditions",
  description:
    "The rules for using our website and working with our services. Please read them carefully.",
  effectiveDate: "19/05/2026",
  intro: [
    "Welcome to Digitize Hub. These Terms and Conditions explain the rules for using our website and working with our services. By accessing our website or submitting an inquiry, you agree to these terms.",
    "Please read them carefully before using our website or starting a project with us.",
  ],
  sections: [
    {
      number: "01",
      title: "About Digitize Hub",
      blocks: [
        {
          type: "paragraph",
          text: "Digitize Hub is a digital agency that provides services including web design and development, branding and logo design, SEO, social media marketing, mobile app design and development, ecommerce solutions, and digital strategy.",
        },
        {
          type: "paragraph",
          text: "The information on our website is provided to help visitors understand our services, portfolio, process, and business approach.",
        },
      ],
    },
    {
      number: "02",
      title: "Use Of Our Website",
      blocks: [
        {
          type: "paragraph",
          text: "You agree to use our website responsibly and only for lawful purposes. You must not use our website in a way that could damage, disable, overload, or interfere with the website or its security.",
        },
        {
          type: "paragraph",
          text: "You agree not to:",
        },
        {
          type: "list",
          items: [
            "Attempt to hack, disrupt, or misuse the website",
            "Copy or steal website content without permission",
            "Submit false or misleading information",
            "Use our forms for spam or harmful activity",
            "Upload malicious files or harmful code",
            "Misrepresent your identity or business",
          ],
        },
        {
          type: "paragraph",
          text: "We reserve the right to restrict access to our website if misuse is suspected.",
        },
      ],
    },
    {
      number: "03",
      title: "Website Content",
      blocks: [
        {
          type: "paragraph",
          text: "All content on the Digitize Hub website, including text, images, graphics, layouts, portfolio content, icons, branding, and design elements, is provided for general information and marketing purposes.",
        },
        {
          type: "paragraph",
          text: "We make reasonable efforts to keep the content accurate and updated, but we do not guarantee that every piece of information will always be complete, current, or error-free.",
        },
      ],
    },
    {
      number: "04",
      title: "Services And Project Inquiries",
      blocks: [
        {
          type: "paragraph",
          text: "Submitting a form or contacting Digitize Hub does not automatically create a client relationship or project agreement. A project officially begins only after scope, pricing, timeline, deliverables, and payment terms are agreed upon by both parties.",
        },
        {
          type: "paragraph",
          text: "Project details may vary based on the client’s requirements, business goals, platform, technical needs, and requested deliverables.",
        },
      ],
    },
    {
      number: "05",
      title: "Quotes And Pricing",
      blocks: [
        {
          type: "paragraph",
          text: "Any quote, estimate, or pricing shared by Digitize Hub is based on the information available at the time. If the project scope changes, additional work may require revised pricing, additional timelines, or a new agreement.",
        },
        {
          type: "paragraph",
          text: "Digitize Hub reserves the right to update pricing based on project complexity, urgency, required features, third-party tools, revisions, or additional services.",
        },
      ],
    },
    {
      number: "06",
      title: "Client Responsibilities",
      blocks: [
        {
          type: "paragraph",
          text: "Clients are responsible for providing accurate project information, required content, brand assets, website access, approvals, feedback, and any third-party account access needed to complete the work.",
        },
        {
          type: "paragraph",
          text: "Project timelines may be affected if required materials, approvals, or communication are delayed.",
        },
        {
          type: "paragraph",
          text: "Client responsibilities may include:",
        },
        {
          type: "list",
          items: [
            "Providing website copy, images, logos, or brand materials",
            "Giving timely feedback and approvals",
            "Sharing hosting, CMS, domain, or platform access when needed",
            "Reviewing deliverables carefully",
            "Confirming final approval before launch or delivery",
          ],
        },
      ],
    },
    {
      number: "07",
      title: "Revisions And Approvals",
      blocks: [
        {
          type: "paragraph",
          text: "Revisions are handled based on the agreed project scope. Minor revisions may be included depending on the service agreement, but major changes, new sections, new features, or changes outside the original scope may require additional charges.",
        },
        {
          type: "paragraph",
          text: "Once a design, page, campaign, or deliverable is approved, further changes may be treated as new work.",
        },
      ],
    },
    {
      number: "08",
      title: "Payments",
      blocks: [
        {
          type: "paragraph",
          text: "Payment terms are agreed before the project begins. Depending on the project type, payments may be required upfront, in milestones, or before final delivery.",
        },
        {
          type: "paragraph",
          text: "Digitize Hub may pause or delay work if payments are not made according to the agreed schedule.",
        },
        {
          type: "paragraph",
          text: "All payments made for completed work, approved milestones, or delivered services are generally non-refundable unless otherwise agreed in writing.",
        },
      ],
    },
    {
      number: "09",
      title: "Third-Party Tools And Costs",
      blocks: [
        {
          type: "paragraph",
          text: "Some projects may require third-party tools, plugins, themes, apps, software, hosting, domains, stock images, fonts, integrations, subscriptions, or paid platforms.",
        },
        {
          type: "paragraph",
          text: "Unless specifically included in the project agreement, these third-party costs are the client’s responsibility.",
        },
        {
          type: "paragraph",
          text: "Digitize Hub is not responsible for pricing changes, outages, policy changes, or limitations caused by third-party platforms.",
        },
      ],
    },
    {
      number: "10",
      title: "Portfolio Usage",
      blocks: [
        {
          type: "paragraph",
          text: "Unless otherwise agreed in writing, Digitize Hub may display completed work, designs, screenshots, mockups, case studies, or project summaries in its portfolio, website, social media, proposals, or marketing materials.",
        },
        {
          type: "paragraph",
          text: "If a client requires confidentiality, this should be discussed and agreed before the project begins.",
        },
      ],
    },
    {
      number: "11",
      title: "Intellectual Property",
      blocks: [
        {
          type: "paragraph",
          text: "After full payment is received, final approved deliverables created specifically for the client may be transferred to the client as agreed in the project scope.",
        },
        {
          type: "paragraph",
          text: "Digitize Hub may retain rights to reusable processes, frameworks, templates, concepts, methods, internal tools, or pre-existing materials used during the project.",
        },
        {
          type: "paragraph",
          text: "Any third-party assets remain subject to their own license terms.",
        },
      ],
    },
    {
      number: "12",
      title: "Website Launch And Post-Launch Support",
      blocks: [
        {
          type: "paragraph",
          text: "If Digitize Hub assists with website launch, we will take reasonable care to test the website before going live. However, websites may still require updates, plugin maintenance, hosting support, security monitoring, content changes, or performance improvements after launch.",
        },
        {
          type: "paragraph",
          text: "Post-launch support, maintenance, or ongoing updates are only included if agreed in the project scope or maintenance plan.",
        },
      ],
    },
    {
      number: "13",
      title: "Limitation Of Liability",
      blocks: [
        {
          type: "paragraph",
          text: "Digitize Hub works to provide professional and reliable services, but we do not guarantee specific business results, rankings, traffic, sales, leads, or revenue outcomes.",
        },
        {
          type: "paragraph",
          text: "We are not responsible for losses caused by third-party platforms, hosting issues, client-side changes, delayed approvals, incorrect information provided by the client, or factors outside our control.",
        },
      ],
    },
    {
      number: "14",
      title: "SEO And Marketing Results",
      blocks: [
        {
          type: "paragraph",
          text: "SEO, social media, and digital marketing results depend on many factors, including competition, website quality, content, budget, search engine updates, market behavior, and consistency.",
        },
        {
          type: "paragraph",
          text: "Digitize Hub does not guarantee specific rankings, followers, traffic numbers, leads, or sales. Our role is to apply professional strategy and best practices to support long-term digital growth.",
        },
      ],
    },
    {
      number: "15",
      title: "External Links",
      blocks: [
        {
          type: "paragraph",
          text: "Our website may include links to third-party websites. These links are provided for convenience only. Digitize Hub is not responsible for the content, security, policies, or practices of external websites.",
        },
      ],
    },
    {
      number: "16",
      title: "Changes To These Terms",
      blocks: [
        {
          type: "paragraph",
          text: "Digitize Hub may update these Terms and Conditions at any time. Updated terms will be posted on this page with a revised effective date.",
        },
        {
          type: "paragraph",
          text: "By continuing to use our website after updates are posted, you agree to the revised terms.",
        },
      ],
    },
    {
      number: "17",
      title: "Contact Us",
      blocks: [
        {
          type: "paragraph",
          text: "If you have any questions about these Terms and Conditions, please contact us at:",
        },
        {
          type: "contact",
          company: "Digitize Hub",
          email: "info@digitizehub.net",
          website: "https://digitizehub.net/",
        },
      ],
    },
  ],
};
