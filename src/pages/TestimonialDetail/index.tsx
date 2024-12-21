import { useEffect } from "react";
import { motion, useAnimate } from "motion/react"
import { useLocation, useNavigate } from 'react-router-dom';
import { useNavbarHeight } from "../../context/NavbarHeightContext";
import { TESTIMONIAL_DETAILS } from '../../copies';

import "./styles.css"
import { getElementByIndex } from "../../utils";
import SvgSequence from "./SvgSequence";

const TestimonialDetail: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { navbarHeight } = useNavbarHeight();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { y: 0, opacity: [0, 1] }, { ease: "easeInOut", duration: 0.75 });
    window.scrollTo(0, 0);
  }, [location.search]);

  const queryParams = new URLSearchParams(location.search);
  const company = queryParams.get('company');

  const testimonialDetail = TESTIMONIAL_DETAILS[company as keyof typeof TESTIMONIAL_DETAILS];

  if (!testimonialDetail) {
    return <p>Testimonial not found</p>;
  }

  // const handleBackClick = () => {
  //   navigate(`/testimonials-section-${companyName}`);
  // };


  const handlePrevClick = () => {
    const prevCompanyIndex = Object.keys(TESTIMONIAL_DETAILS).indexOf(company as string) - 1;
    const prevCompany = getElementByIndex(Object.keys(TESTIMONIAL_DETAILS), prevCompanyIndex);
    navigate(`/testimonials?company=${prevCompany}`);
  };

  const handleNextClick = () => {
    const nextCompanyIndex = Object.keys(TESTIMONIAL_DETAILS).indexOf(company as string) + 1;
    const nextCompany = getElementByIndex(Object.keys(TESTIMONIAL_DETAILS), nextCompanyIndex);
    navigate(`/testimonials?company=${nextCompany}`);
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
    figmaURL,
    svgSequences,
    aspectRatio,
    isMobile,
  } = testimonialDetail;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      key="testimonial-detail"
      className='testimonial-detail-page'
      style={{ marginTop: `${navbarHeight}px` }}
      ref={scope}
    >
      <div className='detail-title-container'>
        <h1 className="detail-title">{companyName}</h1>
        <span className="detail-description">
          {companyDescription}
          <a className="detail-link-container" href={companyURL}>
            <img src="fa-link.svg" alt="Star" className="detail-link fa-link" />
          </a>
        </span>
      </div>
      <div className="retainer-testimonial-container">
        <div className="detail-retainer-container">
          <div className="icon-text-container">
            <img src="fa-calendar.svg" alt="Calendar" className="fa-calendar" />
            <p>{duration}</p>
          </div>
          <div className="icon-text-container">
            <img src="fa-people-group.svg" alt="People Group" className="fa-people-group" />
            <p>{collaborators}</p>
          </div>
          <div className="icon-text-container">
            <img src="fa-pen-line.svg" alt="Pen Line" className="fa-pen-line" />
            <p>{structureType}</p>
          </div>
          <div className="icon-text-container detail-contribution">
            <img src="fa-star.svg" alt="Star" className="fa-star" />
            <p>{contribution}</p>
          </div>
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
        <img className="testimonial-detail-left" src="testimonial-detail-left.svg" />
        <img className="testimonial-detail-right" src="testimonial-detail-right.svg" />
      </div>
      <div className={`detail-iframe-container ${isMobile ? "isMobile" : ""}`} style={{ aspectRatio: aspectRatio ? aspectRatio : "100 / 60.694" }}>
        {svgSequences.length ? <SvgSequence svgs={svgSequences} /> : <iframe src={figmaURL} />}
      </div>
      <div className="navigation-buttons">
        <a className="detail-button detail-prev" onClick={handlePrevClick}>Previous</a>
        <a className="detail-button detail-next" onClick={handleNextClick}>Next</a>
      </div>
    </motion.div>
  )
}

export default TestimonialDetail