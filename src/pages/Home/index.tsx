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
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <ProfileHeader />
      <AboutFractional />
      <Testimonials />
      <GetStarted />
      <FrequentlyAskedQuestions />
      <FractionalContact />
    </div>
  );
}

export default Home;