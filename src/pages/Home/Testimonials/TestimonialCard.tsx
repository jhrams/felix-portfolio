interface TestimonialCardProps {
  companyIcon: string;
  companyNameIcon: string;
  testimonial1: string;
  testimonial2: string;
  author: string;
  companyTitle: string;
  sector: string;
  authorProfile: string;
  backgroundColor: string;
  fontColor: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyIcon,
  companyNameIcon,
  testimonial1,
  testimonial2,
  author,
  companyTitle,
  sector,
  authorProfile,
  backgroundColor,
  fontColor,
}) => (
  <div className="testimonial-card" style={{ backgroundColor, color: fontColor }}>
    <img src={companyIcon} alt="Company Icon" className="company-icon" />
    <img src={companyNameIcon} alt="Company Name Icon" className="company-name-icon" />
    <p className="testimonial">{testimonial1}</p>
    <p className="testimonial">{testimonial2}</p>
    <div className="author-info">
      <img src={authorProfile} alt={author} className="author-profile" />
      <div>
        <p className="author">{author}</p>
        <p className="company-title">{companyTitle}</p>
        <p className="sector">{sector}</p>
      </div>
    </div>
  </div>
);


export default TestimonialCard;