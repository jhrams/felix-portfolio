import { useState } from 'react';


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
      <h3 onClick={toggleAccordion} className="faq-question">
        {question}
        <span className="faq-icon">
          {isOpen ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
        </span>
      </h3>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
};

export default FAQItem;