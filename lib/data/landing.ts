export type SelectedPackage = {
  serviceId: string;
  serviceLabel: string;
  planName: string;
  tier: string;
  price?: string;
};

export function packageLabel(pkg: SelectedPackage) {
  const price = pkg.price ? ` · ${pkg.price}` : "";
  return `${pkg.serviceLabel} — ${pkg.planName}${price}`;
}

export function needFromPackage(pkg: SelectedPackage) {
  return pkg.serviceLabel;
}

export const landingTrusted = {
  heading: "Trusted By Hundreds Of Brands Worldwide",
  copy: "Digitize Hub partners with startups, small businesses, and growing companies across different industries to build professional websites, improve online visibility, and create digital experiences that support real business growth.",
};

export const landingBrandLogos = [
  { src: "/images/brands/brand-1.png", alt: "Created For Purpose", width: 230, height: 75 },
  { src: "/images/brands/brand-2.png", alt: "Great Green Door", width: 230, height: 75 },
  { src: "/images/brands/brand-3.png", alt: "Nahla", width: 230, height: 75 },
  { src: "/images/brands/brand-4.png", alt: "Recreation Therapy Services", width: 230, height: 75 },
  { src: "/images/brands/brand-5.png", alt: "Promotion E-Commerce", width: 230, height: 75 },
  { src: "/images/brands/brand-6.png", alt: "Sacred Stories Publishing", width: 230, height: 75 },
  { src: "/images/brands/brand-7.png", alt: "Lavell Construction", width: 230, height: 75 },
  { src: "/images/brands/brand-8.png", alt: "Queen’s Cos", width: 230, height: 75 },
  { src: "/images/brands/brand-9.png", alt: "Partner brand", width: 230, height: 75 },
];

export const landingAgencyIntro = {
  copy: "Digitize Hub Is A Full-Service Digital Agency Based In Austin Tx Building Human-Based Experiences, Branding, Digital Products, Web Design, Web Development, Mobile App & Saas Products That Help Clients Grow Businesses.",
  cta: "Start Your Project",
};

export const landingCounters = [
  { value: "200+", label: "Completed Projects" },
  { value: "12+", label: "Years of Experience" },
  { value: "25+", label: "Creative & Technical Experts" },
  { value: "99%", label: "Client Satisfaction" },
];

export const landingHero = {
  titleLead: "Launch A Stronger",
  titleAccent: "Digital Presence",
  titleEnd: "That Brings You More Leads",
  copy: "We create modern, high-performing digital solutions that help brands grow faster, attract more customers and stand out in the competitive online world.",
  formTitle: "Let’s do something great together!",
  formCopy: "Have questions or ready to start? Tell us about your project and we will get back within one business day.",
};

export const landingServices = [
  {
    title: "Website Design & Development",
    copy: "Custom web design and development for businesses that need responsive, SEO-friendly, conversion-focused websites built to perform.",
    packageId: "website-design",
  },
  {
    title: "Branding & Logo Designing",
    copy: "Professional branding and logo design that help your business create a strong, consistent identity across digital platforms.",
    packageId: "custom-logo-design",
  },
  {
    title: "Mobile App Design & Development",
    copy: "User-friendly mobile app design and development for businesses that want smoother digital experiences and stronger engagement.",
    packageId: "ecommerce",
  },
  {
    title: "Search Engine Optimization",
    copy: "SEO that improves Google visibility, targets the right keywords, increases organic traffic, and generates better leads.",
    packageId: "seo",
  },
  {
    title: "Social Media Marketing",
    copy: "Strategic social campaigns that build awareness, connect with the right audience, and grow engagement online.",
    packageId: "ad-management",
  },
];

export const landingAlwaysOn = {
  titleLead: "Websites Promote You",
  titleAccent: "“24/7”",
  titleEnd: "No Employee Will Do That",
  copy: "Your website is often the first place customers judge your business. A strong website can explain your services, build trust, collect leads and guide visitors toward action even when your team is offline.",
  chatCta: "Chat With Design Consultant",
  talkCta: "Talk To Our Team",
};

export const landingGrowthFocused = {
  eyebrow: "Growth Focused",
  titleLead: "Digital Solutions Designed",
  titleAccent: "Around Real Business Goals",
  copy: "Digitize Hub creates websites, landing pages and digital campaigns with a clear purpose. We focus on helping your business attract the right audience, communicate clearly and convert more visitors into leads.",
  image: {
    src: "/images/lp/growth-focused.webp",
    alt: "Growth-focused project dashboards and performance insights",
    width: 1600,
    height: 590,
  },
};

export const landingProcessIntro = {
  eyebrow: "How It Works",
  titleLead: "A Clear Digital Process Designed To Build Better",
  titleAccent: "Websites, Brands And Marketing Results",
  copy: "Our process is simple, strategic, and focused on results. From research to launch, we plan every step carefully so your website, brand, or marketing campaign is aligned with your business goals and built for long-term growth.",
};

export const landingProcess = [
  {
    title: "Research",
    icon: "/images/lp/research.png",
    copy: "We study your business, target audience, competitors, services, and goals to create a clear digital strategy before starting the project.",
  },
  {
    title: "Designing Strategy",
    icon: "/images/lp/designing-strategy.png",
    copy: "We plan the website structure, user journey, content flow, SEO direction, and visual style to make sure every section has a clear purpose.",
  },
  {
    title: "Content & Design",
    icon: "/images/lp/content-design.png",
    copy: "We create clean layouts, strong messaging, and conversion-focused content that helps visitors understand your value and take action.",
  },
  {
    title: "Development",
    icon: "/images/lp/development.png",
    copy: "We build fast, responsive, and user-friendly websites using modern technologies, clean structure, and SEO-friendly development practices.",
  },
  {
    title: "Maintenance",
    icon: "/images/lp/maintenance.png",
    copy: "After launch, we provide updates, technical support, performance improvements, and ongoing website maintenance when needed.",
  },
  {
    title: "Testing & Go Live",
    icon: "/images/lp/testing-go-live.png",
    copy: "Before launch, we test speed, mobile responsiveness, forms, links, browser compatibility, and overall user experience.",
  },
];

export const landingResultsIntro = {
  eyebrow: "Real Work. Real Results.",
  titleLead: "Growth Oriented Digital",
  titleAccent: "Solutions",
  copy: "Every project at Digitize Hub is built with a clear goal: better design, stronger messaging, improved performance, and measurable business growth. We create websites, branding, SEO campaigns, and digital marketing solutions that help businesses attract more traffic, build credibility, and convert visitors into customers.",
};

export const landingResults = [
  {
    image: "/images/lp/results/paws-quivive.png",
    avatar: "/images/lp/results/avatar-michael.png",
    name: "Michael Anderson",
    role: "Founder, GrowthPoint Solutions",
    quote:
      "Digitize Hub helped us turn our pet brand into something that finally felt fun, trustworthy, and ready for growth. We needed a digital presence that could explain our product clearly while still feeling playful and pet-friendly, and their team handled that balance really well. From the website layout to the social media visuals and campaign direction, everything looked consistent and easy to understand. The final result gave our brand a much stronger first impression and made it easier for customers to connect with what we offer.",
    stats: [
      { value: "15K+", label: "Pet Owners Reached" },
      { value: "38%", label: "Increase In Product Inquiries" },
      { value: "2.4x", label: "Better Brand Engagement" },
    ],
  },
  {
    image: "/images/lp/results/jones-bbq.png",
    avatar: "/images/lp/results/avatar-marcus.png",
    name: "Marcus Jones",
    role: "Owner, Jones Bar-B-Q",
    quote:
      "Working with Digitize Hub gave our BBQ brand the bold and professional look we were missing online. We already had a strong product and loyal customers, but our digital presence did not reflect the personality of the business. Their team created visuals and website sections that captured the energy of our brand while making the menu, offers, and story easier to follow. The new look helped us show up more confidently across the website and social media, and it made the brand feel much more polished.",
    stats: [
      { value: "12K+", label: "Local Customers Reached" },
      { value: "45%", label: "Increase In Menu Views" },
      { value: "3x", label: "More Social Engagement" },
    ],
  },
  {
    image: "/images/lp/results/ask-peri.png",
    avatar: "/images/lp/results/avatar-amanda.png",
    name: "Amanda Brooks",
    role: "Marketing Manager, Ask Peri",
    quote:
      "Digitize Hub understood that Ask Peri needed to feel friendly, clean, and helpful from the first glance. Our goal was to create a digital experience that made pet care information easier to explore while still keeping the brand warm and approachable. Their team improved the layout, visuals, and content flow so users could understand the purpose quickly and move through the site without confusion. The final design gave us a stronger platform to build trust with pet owners and present our service more professionally.",
    stats: [
      { value: "600+", label: "Pet Care Users Engaged" },
      { value: "10K+", label: "Website Interactions" },
      { value: "5M+", label: "Brand Impressions Generated" },
    ],
  },
  {
    image: "/images/lp/results/total-performance.png",
    avatar: "/images/lp/results/avatar-ryan.png",
    name: "Ryan Carter",
    role: "Director, Total Performance Athletics",
    quote:
      "Digitize Hub helped us create a sharper and more credible online presence for our athletics brand. We needed a website that could present our programs, training approach, and brand personality in a clean and organized way. Their team improved the structure, visuals, and overall user experience so visitors could quickly understand what we offer and how to get started. The finished site made our business look more established and gave us a much better foundation for future marketing.",
    stats: [
      { value: "1,200+", label: "Athletes Reached" },
      { value: "32%", label: "Increase In Program Inquiries" },
      { value: "2.8x", label: "Better Website Engagement" },
    ],
  },
];

export const landingTechIntro = {
  eyebrow: "Our Tech Stack",
  titleLead: "Technologies We Use To Build",
  titleAccent: "Fast, Scalable",
  titleEnd: "And Modern Digital Solutions",
  copy: "We use reliable design, development, e-commerce, and marketing tools to create digital solutions that are easy to manage, responsive across devices, and ready for business growth.",
};

export const landingTechStack = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "WPF", src: "/images/lp/tech/wpf_icon.svg" },
      { name: "ReactJS", src: "/images/lp/tech/react_icon.svg" },
      { name: "Typescript", src: "/images/lp/tech/typescript_icon.svg" },
      { name: "HTML", src: "/images/lp/tech/html_icon.svg" },
      { name: "Vue", src: "/images/lp/tech/vue_icon.svg" },
      { name: "Angular", src: "/images/lp/tech/Angular.svg" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "MongoDB", src: "/images/lp/tech/mongo_db_icon.svg" },
      { name: "MSSQL", src: "/images/lp/tech/mssql_icon.svg" },
      { name: "Firebase", src: "/images/lp/tech/firebase.svg" },
      { name: "DynamoDB", src: "/images/lp/tech/DynamoDB_icon.svg" },
      { name: "Redis", src: "/images/lp/tech/redis_icon.svg" },
    ],
  },
  {
    id: "cms",
    label: "CMS",
    items: [
      { name: "Weebly", src: "/images/lp/tech/weebly_logo.svg" },
      { name: "Drupal", src: "/images/lp/tech/drupal-logo.svg" },
      { name: "Systeme", src: "/images/lp/tech/systeme_logo.png" },
      { name: "WordPress", src: "/images/lp/tech/wordpress_icon.svg" },
      { name: "HubSpot", src: "/images/lp/tech/hubspot_logo.svg" },
      { name: "Unbounce", src: "/images/lp/tech/unbounce-logo.svg" },
      { name: "Webflow", src: "/images/lp/tech/webflow_logo.svg" },
      { name: "Wix", src: "/images/lp/tech/wix_logo.svg" },
    ],
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    items: [
      { name: "Shopify", src: "/images/lp/tech/shopify_icon.svg" },
      { name: "WooCommerce", src: "/images/lp/tech/woocommerce_logo.svg" },
      { name: "BigCommerce", src: "/images/lp/tech/bigcommerce_logo.svg" },
      { name: "Magento", src: "/images/lp/tech/magento_icon.svg" },
      { name: "OpenCart", src: "/images/lp/tech/opencart_logo.svg" },
      { name: "Shoplazza", src: "/images/lp/tech/shoplazza_logo.svg" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    items: [
      { name: "iOS", src: "/images/lp/tech/ios.svg" },
      { name: "React Native", src: "/images/lp/tech/react_icon.svg" },
      { name: "Android", src: "/images/lp/tech/andriode_icon.svg" },
      { name: "Flutter", src: "/images/lp/tech/flutter_icon.svg" },
      { name: "Ionic", src: "/images/lp/tech/ionic_icon.svg" },
      { name: "Swift", src: "/images/lp/tech/swift_icon.svg" },
      { name: "Kotlin", src: "/images/lp/tech/kotlin_icon.svg" },
      { name: "Objective-C", src: "/images/lp/tech/objectivec_icon.svg" },
    ],
  },
  {
    id: "infra",
    label: "Infra And Devops",
    items: [
      { name: "AWS", src: "/images/lp/tech/aws_icon.svg" },
      { name: "Gradle", src: "/images/lp/tech/gradle_icon.svg" },
      { name: "Jenkins", src: "/images/lp/tech/jekins_icon.svg" },
      { name: "Appium", src: "/images/lp/tech/appium_icon.svg" },
      { name: "Selenium", src: "/images/lp/tech/selenium_icon.svg" },
      { name: "Kotlin", src: "/images/lp/tech/kotlin_icon.svg" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", src: "/images/lp/tech/node_js_icon.svg" },
      { name: "PHP", src: "/images/lp/tech/php_icon.svg" },
    ],
  },
];
