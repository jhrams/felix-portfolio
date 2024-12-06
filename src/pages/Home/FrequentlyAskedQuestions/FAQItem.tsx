import { useState } from 'react';
import { renderText } from '../../../utils';

import "./styles.css";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <h3 onClick={toggleAccordion} className="faq-question" >
        {question}
        <span className="faq-icon">
          {isOpen ? <img src="minus.svg" alt="minus" /> : <img src="plus.svg" alt="plus" />}
        </span>
      </h3>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {renderText(answer)}
      </div>
    </div >
  );
};

export default FAQItem;