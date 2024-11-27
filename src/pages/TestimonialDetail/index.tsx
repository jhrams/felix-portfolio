import { motion } from "motion/react"
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavbarHeight } from "../../context/NavbarHeightContext";
import { TESTIMONIAL_DETAILS } from '../../copies';

import "./styles.css"

const TestimonialDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { navbarHeight } = useNavbarHeight();

  const queryParams = new URLSearchParams(location.search);
  const company = queryParams.get('company');

  const testimonialDetail = TESTIMONIAL_DETAILS[company as keyof typeof TESTIMONIAL_DETAILS];

  if (!testimonialDetail) {
    return <p>Testimonial not found</p>;
  }

  const handleBackClick = () => {
    navigate(`/#testimonials-section-${companyName}`);
  };

  const handleNextClick = () => {
    navigate(`/#testimonials-section-${companyName}`);
  };

  const {
    companyName,
    companyDescription,
    companyURL,
    duration,
    collaborators,
    structureType,
    contribution,
    testimonial,
    authorPic,
    authorName,
    authorTitle,
    figmaURL
  } = testimonialDetail;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      key="testimonial-detail"
      className='testimonial-detail-page'
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <div className='detail-title-container'>
        <a className="detail-back" href="#" onClick={handleBackClick}>Back</a>
        <a className="detail-next" href="#" onClick={handleNextClick}>Next</a>
        <h1 className="detail-title">{companyName}</h1>
        <span className="detail-description">
          {companyDescription}
          <a href={companyURL}>
            <i className="detail-link fas fa-link" />
          </a>
        </span>
      </div>
      <div className="retainer-testimonial-container">
        <div className="detail-retainer-container">
          <span>
            <i className="far fa-calendar" />
            {duration}
          </span>
          <span>
            <i className="fas fa-users" />
            {collaborators}
          </span>
          <span>
            <i className="fas fa-pencil-alt" />
            {structureType}
          </span>
          <span>
            <i className="far fa-star" />
            {contribution}
          </span>
        </div>
        <div className="detail-testimonial-container">
          <p className="detail-testimonial">{testimonial}</p>
          <div className="detail-author-pic-container">
            <img src={authorPic}></img>
            <div className="detail-author-container">
              <p className="detail-author-name">{authorName}</p>
              <p className="detail-author-title">{authorTitle}</p>
            </div>
          </div>
        </div>
        <img className="testimonial-detail-left" src="testimonial-detail-left.png" />
        <img className="testimonial-detail-right" src="testimonial-detail-right.png" />
      </div>
      <div className='detail-iframe-container'>
        <iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width="800" height="450" src={figmaURL} allowFullScreen />
      </div>
    </motion.div>
  )
}

export default TestimonialDetail