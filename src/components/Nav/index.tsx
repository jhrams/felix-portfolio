import PageLinks from "../PageLinks";
import useWindowWidth from '../../hooks/useWindowWidth';
import "./styles.css"

interface NavProps {
  mobileTitle: string;
  title: string;
}

const Nav: React.FC<NavProps> = ({ mobileTitle, title }) => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768; // Example breakpoint for mobile

  return (
    <nav>
      <p>{isMobile ? <strong>{mobileTitle}</strong> : title}</p >
      <PageLinks />
    </nav>
  );
};

export default Nav;
