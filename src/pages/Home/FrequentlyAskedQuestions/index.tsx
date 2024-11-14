import FAQItem from './FAQItem';
import { FAQS, FAQ_TITLE } from "../../../copies";

import "./styles.css"

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <div className="faq">
      <h2>{FAQ_TITLE}</h2>
      {FAQS.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FrequentlyAskedQuestions;