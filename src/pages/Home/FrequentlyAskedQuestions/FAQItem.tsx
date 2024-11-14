import "./styles.css";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="faq-item">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default FAQItem;