import { motion } from "motion/react"
import { useNavbarHeight } from '../../context/NavbarHeightContext';

import ProfileHeader from './ProfileHeader';
import AboutFractional from './AboutFractional';
import Testimonials from './Testimonials';
import GetStarted from './GetStarted';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
import FractionalContact from './FractionalContact';

import './styles.css'

const Home: React.FC = () => {
  const { navbarHeight } = useNavbarHeight();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      key="home" className="home-page"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <ProfileHeader />
      <AboutFractional />
      <Testimonials />
      <GetStarted />
      <FrequentlyAskedQuestions />
      <FractionalContact />
    </motion.div>

  );
}

export default Home;