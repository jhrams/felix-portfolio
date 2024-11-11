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

const NAV_TITLE: string = 'FELIX.DESIGN';
const FOOTER_TITLE: string = 'FELIX.DESIGN';
const EMAIL: string = 'felix.lau.design@gmail.com';
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
  GET_IN_TOUCH
};