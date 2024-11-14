import FAQItem from './FAQItem';
import { FAQS } from "../../../copies";

import "./styles.css"

const FrequentlyAskedQuestions: React.FC = () => {
  return (
    <div className="faq">
      {FAQS.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

export default FrequentlyAskedQuestions;