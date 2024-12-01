interface RetainerModel {
  title: string;
  description1: string;
  description2: string;
  monthly: string;
  flatFee: string;
}

interface SingleProjectModel {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  monthly: string;
  flatFee: string;
}

interface TrialModel {
  title: string;
  auditDescription: string;
  deckDescription: string;
  weekly: string;
  flatFee: string;
}

interface TestimonialDetail {
  companyName: string;
  companyDescription: string;
  companyURL: string;
  duration: string;
  collaborators: string;
  structureType: string;
  contribution: string;
  testimonial: string;
  authorPic: string;
  authorName: string;
  authorTitle: string;
  figmaURL: string;
}

const NAV_TITLE: string = 'FELIX.DESIGN';
const FOOTER_TITLE: string = 'FELIX.DESIGN';
const EMAIL: string = 'hello@felix.design';
const COPYRIGHT: string = '© 2024 Felix Lau';
const NAV_MOBILE_TITLE: string = 'F.D';
const STRUCTURE_TITLE: string = 'How we can work together';
const RETAINER_MODEL: RetainerModel = {
  title: 'Retainer / “Subscription”',
  description1: 'I am fully embedded into your business, working with your team as a full-time product designer.  I deliver on what your business needs at the moment, month over month: regular meetings, design reviews, user research, product design-adjacent work (collateral, website, decks).',
  description2: 'Clients begin with a <strong>Trial</strong> project to assess mutual compatibility. At the end, we mutually decide if a long-term engagement is worthwhile.',
  monthly: 'Monthly',
  flatFee: 'Flat fee',
};

const SINGLE_PROJECT_MODEL: SingleProjectModel = {
  title: 'Single Project',
  description1: 'Assign me one project that has a defined beginning and end. As part of the scope of work, we agree upon what success looks like for the business when I reach the end of the project.',
  description2: 'Give me access to your current product, and contextualize me to who is using the software and what the core flows are. I propose what the following steps are in order to get to the end goal.',
  description3: 'For this type of engagement, I typically interface with just one to two people, from start to finish.',
  monthly: '1 month',
  flatFee: 'Hourly / Flat fee',
};

const TRIAL_MODEL: TrialModel = {
  title: 'Trial',
  auditDescription: '<strong>Audits:</strong> Give me access to your current product, and contextualize me to who is using the software and what the core flows are. I’ll annotate any issues I come across in a Figma file, articulate why they are problematic, and propose suggestions for how to make it better.',
  deckDescription: '<strong>Decks:</strong> Typically for a pitch or an important conference. Great opportunity to not only let me contextualize what your business does and why it stands out, but also a short period of high-touch interaction that let the founders see how we collaborate together.',
  weekly: '1-2 weeks',
  flatFee: 'Flat fee',
}

const GET_IN_TOUCH: string = 'Get in touch';
const CONTACT_DESCRIPTION: string = '<strong>Spend 30 minutes</strong> discussing your businesses needs and getting to know each other.'
const CONTACT_EMAIL_DESCRIPTION: string = "Or directly reach out at <a href=\"mailto:hello@felix.design\">hello@felix.design</a>"

const HOME_TITLE: string = "I’m a fractional product designer for early stage startups";
const HOME_DESCRIPTION: string = "Working with startups on everything from finding PMF to fundraising"
const LETS_WORK_TOGETHER: string = "Let's work together";

const WHY_FRACTIONAL = {
  title: 'Hiring me <span>fractionally</span> is better',
  title1: '🔥 Fast onboarding',
  description1: 'Unlike FTEs, you can onboard me fractionally in days, not weeks',
  title2: '🌟 High quality',
  description2: 'With 10+ years of experience, you can expect high quality deliverables and fast turn around times',
  title3: '⚡️ Outputs only',
  description3: 'No time wasted on weekly 1-on-1s, performance reviews or other FTE obligations',
}

const VIEW_RECENT_WORK: string = 'View recent work';
const RECENT_WORK_URL = "https://www.figma.com/proto/m892XlZtYvrOK7UdY2Apap/2024-Recent-Work---Felix-Lau?node-id=1-9503&node-type=slide&viewport=-100%2C-16%2C0.48&t=6nYH02Nftb8aSGPV-8&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&hide-ui=1&fuid=749107291816531339"

const TESTIMONIALS = [
  {
    companyName: "candor",
    companyLogo: "candor.svg",
    testimonial1: "Felix joined Candor as our first hire. He has an exceptional level of intuition for what we should build and when, coupled with a very high bar for execution. Candor wouldn’t be where it is today without him.",
    testimonial2: "",
    author: "Kelsey Bishop",
    companyTitle: "Candor, Founder",
    sector: "HR Tech: Recruiting",
    authorProfile: "candor-portrait.svg",
    backgroundColor: "#2F657A",
    fontColor: "#FFFFFF",
    hasDetails: true
  },
  {
    companyName: "nirvana",
    companyLogo: "nirvana.svg",
    testimonial1: "Felix knows deeply how to design both detailed UX/UI as well as the art of large visioning.",
    testimonial2: "This has been critical for conveying everything from our mission and vision to delivering a strong experience for our users.",
    author: "Kelvin Chan",
    companyTitle: "Nirvana, Co-Founder, CPO & President ",
    sector: "Medtech: Health Insurance",
    authorProfile: "nirvana-portrait.svg",
    backgroundColor: "#2C1F45",
    fontColor: "#FFFFFF",
    hasDetails: true
  },
  {
    companyName: "castmagic",
    companyLogo: "castmagic.svg",
    testimonial1: "Felix helped us reduce new users’ time to value and launch our content pipeline feature.",
    testimonial2: "For every problem, he always provides multiple solutions and the turnaround is really fast. Felix has the technical skills, problem-solving abilities, and creativity to enhance any core product experience. 100% would recommend him to any other startup team.",
    author: "Blaine Bolus",
    companyTitle: "Co-Founder",
    sector: "Podcast/Audio: AI Tools",
    authorProfile: "castmagic-portrait.svg",
    backgroundColor: "#0D0B08",
    fontColor: "#FFFFFF",
    hasDetails: true
  },
  {
    companyName: "mammoth",
    companyLogo: "mammoth.svg",
    testimonial1: "Felix has been an unlock for Mammoth. I've struggled to find designers who can get up to speed on our domain quickly enough to drive real value and iterate with me as quickly as I'd like.",
    testimonial2: "Felix realized early on that instead of spending hours on process and documentation, the fastest way to value was to do live design sessions with me in which we work through user stories together and translate product requirements into UI in realtime. It's been transformative, and I think it's a truly unique approach to building product 0>1.",
    author: "Julia Cohen",
    companyTitle: "Mammoth, Founder & CEO",
    sector: "B2B: CPG",
    authorProfile: "mammoth-portrait.svg",
    backgroundColor: "#4A41FD",
    fontColor: "#FFFFFF",
    hasDetails: false
  },
  {
    companyName: "sindi",
    companyLogo: "sindi.svg",
    testimonial1: "Felix’s diverse experience and continual learning across industries translate seamlessly into not only best design practices but also a strategic, big-picture approach.",
    testimonial2: "He’s more than just an exceptional designer who delivers high-fidelity UI; he becomes an integral extension of your team, contributing far beyond the scope of design.",
    author: "Shane Roach",
    companyTitle: "Sindi, Co-founder & CEO ",
    sector: "Medtech: Dental SaaS",
    authorProfile: "sindi-portrait.svg",
    backgroundColor: "#EF616E",
    fontColor: "#FFFFFF",
    hasDetails: true
  },
  {
    companyName: "atlas",
    companyLogo: "atlas.svg",
    testimonial1: "Felix is by far one of the best product designers I’ve worked with. And we’ve {co-founders}  worked with a lot of designers back at Facebook.",
    testimonial2: "",
    author: "Vetri Balaji",
    companyTitle: "Atlas, Co-Founder & CTO",
    sector: "Fintech: Credit Card",
    authorProfile: "atlas-portrait.svg",
    backgroundColor: "#0B0B5B",
    fontColor: "#FFFFFF",
    hasDetails: true
  },
  {
    companyName: "wefunder",
    companyLogo: "wefunder.svg",
    testimonial1: "I love working with Felix because everyone feels excited about the product afterwards.",
    testimonial2: "He doesn’t just deliver designs, but goes above and beyond to be a valuable thought partner looking after the big-picture business goals as well as the details like proposing better microcopy. Also, he’s so freaking fast. We love Felix!",
    author: "Geena Chen",
    companyTitle: "Wefunder, Product Lead",
    sector: "Fintech: Fundraising",
    authorProfile: "wefunder-portrait.svg",
    backgroundColor: "#0A76D1",
    fontColor: "#FFFFFF",
    hasDetails: true
  },
  {
    companyName: "vibrant",
    companyLogo: "vibrant.svg",
    testimonial1: "In our journey from v0-1, Felix has helped us iterate through many versions of what Vibrant could be.",
    testimonial2: "Felix can relentlessly frame and reframe problems. Combined with his previous years in health tech, he has helped us stay nimble and focused as we narrow in on our product vision.",
    author: "Sunita Mohanty",
    companyTitle: "Vibrant, Co-Founder & CEO",
    sector: "Medtech: AI-augmented EHR",
    authorProfile: "vibrant-portrait.svg",
    backgroundColor: "#646054",
    fontColor: "#FFFFFF",
    hasDetails: false
  },
  {
    companyName: "forward",
    companyLogo: "forward.svg",
    testimonial1: "Felix pulled together in record speeds the v1 vision of Forward from a handful of documents – some wireframes, some Google Docs, and a sprinkling of meetings.",
    testimonial2: "It’s been amazing to get the user feedback with glowing reviews about how easy the platform is to use, and what a delight it is to job match on Forward – Felix had a direct hand in this!",
    author: "Mariam Matan",
    companyTitle: "Forward, Co-Founder",
    sector: "HR Tech: Job Matching",
    authorProfile: "forward-portrait.svg",
    backgroundColor: "#FFFFFF",
    fontColor: "#241D16",
    hasDetails: false
  },
]

const GET_STARTED = {
  title: 'How we can get started',
  title1: 'Book a call',
  description1: '<a href="/#/contact" >Spend 30 minutes</a> discussing your businesses needs and getting to know each other.',
  title2: 'Onboard',
  description2: "I'll get up to speed on your business in less than a week.",
  title3: "Design for your product",
  description3: "We'll align on project deliverables and I'll start designing.",
}

const FAQ_TITLE: string = 'FAQ';

const FAQS = [
  {
    question: "What are the ways we can work together?",
    answer: "It depends on what your business needs. I can meet you where you are – from a small <strong>trial exercise</strong>; to a well-defined <strong>design project</strong>; all the way to a <strong>full-service retainer</strong>. When we get on our initial call, I make sure you’re not under- or overcommitting to anything that doesn’t fit the needs of your business. See the <a href=\"/#/structure\">Structure</a> page for more information."
  },
  {
    question: "When can we start?",
    answer: "From initial call to day one, in one week or less. In our initial call, we determine what you’re looking for. I then draft a scope of work for you within two days. My proposals usually suggest a start date for the following Monday. "
  },
  {
    question: "Why is fractional hiring better than full-time?",
    answer: "Startups usually hire one full-time designer, only to later realize they hired too soon (not enough work) or they hired too junior (hiring budget too low). When the hire quits or gets let go, the lengthy, costly process starts all over again. When you fractionally hire me, you get someone with 10+ years design experience, requires no training, and very little ramp time. If things don’t work out, we just stop the commitment at the end of the month."
  },
  {
    question: "How do you ensure each client gets their money's worth?",
    answer: "I dedicate as much time to a client as they need, so my roster is always small. Additionally, even if there is a desire to engage in a full-service retainer, I will always propose a <strong>2-4 week</strong> trial period with either a design project or a product audit, as a way to mutually assess if we are a good fit for one another. There are no hard feelings if we decide not to move on after the trial period."
  },
  {
    question: "Are you part of a team of designers? ",
    answer: "No – you always work with me. You’ll always get the same level of attention and service as any client that I serve, because I am a one-man business, not an agency."
  },
]

const FRACTIONAL: string = "Hire me fractionally today and I'll be your <span>design partner</span> by next week.";

const TESTIMONIAL_DETAILS: { [key: string]: TestimonialDetail } = {
  candor: {
    companyName: "Candor",
    companyDescription: "A high-touch recruiting service for US startups looking to hire abroad",
    companyURL: "https://www.joincandor.com/",
    duration: "Nov 2021 - Present",
    collaborators: "Collaborators: Founder, 2-4 Eng",
    structureType: "Monthly retainer",
    contribution: "I’ve shaped the entire product experience every step of the way from now back to the 3 previous pivots: from a backchannelling app; to a job network; to a teambuilding tool; to now a recruiting platform",
    testimonial: "Felix joined Candor as our first hire. He has an exceptional level of intuition for what we should build and when, coupled with a very high bar for execution. Candor wouldn’t be where it is today without him.",
    authorPic: "candor-portrait.svg",
    authorName: "Kelsey Bishop",
    authorTitle: "Founder",
    figmaURL: "https://embed.figma.com/slides/Bcrcns9mBUKU2Yx8jtmT9I/Felix-Lau-Work?node-id=4815-7122&m=dev&embed-host=share&footer=false&page-selector=false",
  },
  nirvana: {
    companyName: "Nirvana",
    companyDescription: "A high-touch recruiting service for US startups looking to hire abroad",
    companyURL: "",
    duration: "Aug 2022 - Present",
    collaborators: "Collaborators: CPO, 1 PM, 1 Eng",
    structureType: "Monthly retainer",
    contribution: "Kelvin and various teams use my prototypes and mockups for client discovery and design partner sessions. These concepts typically get built the following quarter(s). Billing managers have reported their teams’ daily policies processed went from 80 to 150 after Nirvana.",
    testimonial: "Felix knows deeply how to design both detailed UX/UI’s and also the large art of visioning. This has been critical for conveying everything from our mission and vision to delivering a strong experience for our users.",
    authorPic: "nirvana-portrait.svg",
    authorName: "Kelvin Chan",
    authorTitle: "Co-Founder, CPO & President ",
    figmaURL: "https://embed.figma.com/slides/Bcrcns9mBUKU2Yx8jtmT9I/Felix-Lau-Work?node-id=5942-4412&m=dev&embed-host=share&footer=false&page-selector=false",
  },
  sindi: {
    companyName: "Sindi",
    companyDescription: "Modernizing dental referral forms, file transfers and communication",
    companyURL: "",
    duration: "July 2023 - Present",
    collaborators: "Collaborator: Co-founder",
    structureType: "Hourly",
    contribution: "I created scaleable foundations for the product’s core pieces: navigation,, the creation of referrals, and referral workflow management. Changes and additions to referral workflows are now trivial with minimal UX cost.",
    testimonial: "Felix’s diverse experience and continual learning across industries translate seamlessly into not only best design practices but also a strategic, big-picture approach. \nHe’s more than just an exceptional designer who delivers high-fidelity UI; he becomes an integral extension of your team, contributing far beyond the scope of design.",
    authorPic: "sindi-portrait.svg",
    authorName: "Shane Roach",
    authorTitle: "Co-founder & CEO",
    figmaURL: "https://embed.figma.com/slides/Bcrcns9mBUKU2Yx8jtmT9I/Felix-Lau-Work?node-id=4831-9132&m=dev&embed-host=share&footer=false&page-selector=false",
  },
  wefunder: {
    companyName: "Wefunder",
    companyDescription: "Meaningful community fundraising for both investors and founders",
    companyURL: "",
    duration: "September 2023 - Present",
    collaborators: "Collaborators: 2 PMs, 2-3 Eng",
    structureType: "Hourly with minimum retainer",
    contribution: "I was embedded into multiple teams that wanted to deepen founder-investor engagement, which in turn leads to higher investment volume.",
    testimonial: "I love working with Felix because everyone feels excited about the product afterwards. \nHe doesn’t just deliver designs, but goes above and beyond to be a valuable thought partner looking after the big-picture business goals as well as the details like proposing better microcopy. Also, he’s so freaking fast. We love Felix!",
    authorPic: "wefunder-portrait.svg",
    authorName: "Geena Chen",
    authorTitle: "Product Lead",
    figmaURL: "",
  },
  castmagic: {
    companyName: "Castmagic",
    companyDescription: "Automagically turning media into any kind of static/written content",
    companyURL: "",
    duration: "March 2024 - Oct 2024",
    collaborators: "Collaborator: Co-founder",
    structureType: "Monthly retainer",
    contribution: "I redesigned Castmagic’s onboarding so we could show how static content gets instantly generated from any source recording. Users previously had a lengthy setup before they could generate anything at all.",
    testimonial: "Felix helped us reduce new users’ time to value and launch our content pipeline feature. For every problem, he always provides multiple solutions and the turnaround is really fast. \nFelix has the technical skills, problem-solving abilities, and creativity to enhance any core product experience. 100% would recommend him to any other startup team.",
    authorPic: "castmagic-portrait.svg",
    authorName: "Blaine Bolus",
    authorTitle: "Co-founder",
    figmaURL: "",
  },
  atlas: {
    companyName: "Atlas",
    companyDescription: "An accessible credit building product",
    companyURL: "",
    duration: "Jun 2023 - Jan 2024",
    collaborators: "Collaborators: 2 Co-founders, 1-2 Eng",
    structureType: "Monthly retainer",
    contribution: "I created key touch-points (onboarding, home, rewards) that showed what the product offers. In 45 days after implementation, Atlas’ customer complaint volume went down 50% from 12,000/wk to 6,000/wk because of design.",
    testimonial: "Felix is by far one of the best product designers I’ve worked with. And we’ve {both co-founders}  worked with a lot of designers back at Facebook.",
    authorPic: "atlas-portrait.svg",
    authorName: "Vetri Balaji",
    authorTitle: "Co-founder & CTO",
    figmaURL: "",
  },
}

export {
  NAV_TITLE,
  FOOTER_TITLE,
  EMAIL,
  COPYRIGHT,
  NAV_MOBILE_TITLE,
  STRUCTURE_TITLE,
  RETAINER_MODEL,
  SINGLE_PROJECT_MODEL,
  TRIAL_MODEL,
  GET_IN_TOUCH,
  CONTACT_DESCRIPTION,
  CONTACT_EMAIL_DESCRIPTION,
  WHY_FRACTIONAL,
  VIEW_RECENT_WORK,
  TESTIMONIALS,
  GET_STARTED,
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
  FAQ_TITLE,
  FAQS,
  FRACTIONAL,
  RECENT_WORK_URL,
  TESTIMONIAL_DETAILS
};