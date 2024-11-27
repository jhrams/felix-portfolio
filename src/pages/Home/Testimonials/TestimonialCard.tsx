import { BASE_URL } from "../../../constants";
interface TestimonialCardProps {
  companyName: string;
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
  hasDetails: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyName,
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
  hasDetails,
}) => (
  <div id={`testimonials-section-${companyName}`} className="testimonial-card" style={{ backgroundColor, color: fontColor }}>
    {companyIcon && <img src={companyIcon} alt="Company Icon" className="company-icon" />}
    {companyNameIcon && <img src={companyNameIcon} alt="Company Name Icon" className="company-name-icon" />}
    <p className="sector">{sector}</p>
    <p className="testimonial">{testimonial1}</p>
    <p className="sub-testimonial">{testimonial2}</p>
    <div className="author-arrow-container">
      <div className="author-info">
        <img src={authorProfile} alt={author} className="author-profile" />
        <div className="author-text">
          <p className="author">{author}</p>
          <p className="company-title">{companyTitle}</p>
        </div>
      </div>
      {hasDetails && (
        <a href={`${BASE_URL}/#/testimonials?company=${companyName}`}>
          <img src="arrow.svg" alt="arrow" className="arrow" />
        </a>
      )}
    </div>
  </div>
);


export default TestimonialCard;