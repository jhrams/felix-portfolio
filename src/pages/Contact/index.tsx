import { motion } from "motion/react"
import { InlineWidget } from "react-calendly";
import { useNavbarHeight } from '../../context/NavbarHeightContext';
import { GET_IN_TOUCH, CONTACT_DESCRIPTION } from '../../copies'
import { renderText } from '../../utils';

import './styles.css'

const Contact: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      key="contact"
      className="contact-page"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <div className='contact-title-container'>
        <h1 className='contact-title'>{GET_IN_TOUCH}</h1>
        <p className='contact-description'>{renderText(CONTACT_DESCRIPTION)}</p>
      </div>
      <InlineWidget url="https://calendly.com/felix-lau/30min" />
      <img src="contact-dots.png" alt="contact-dots" className="contact-dots" />
      <img src="contact-line.png" alt="contact-line" className="contact-line" />
    </motion.div>
  );
}

export default Contact;