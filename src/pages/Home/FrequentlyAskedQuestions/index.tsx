import FAQItem from './FAQItem';
import { FAQS, FAQ_TITLE } from "../../../copies";

import "./styles.css"

const FrequentlyAskedQuestions: React.FC = () => (
  <div className="faq">
    <h2 className="faq-title">{FAQ_TITLE}</h2>
    {FAQS.map(({ question, answer }, index) => (
      <FAQItem key={index} question={question} answer={answer} />
    ))}
  </div>
);

export default FrequentlyAskedQuestions;