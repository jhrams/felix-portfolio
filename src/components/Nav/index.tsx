import PageLinks from "../PageLinks";
import useWindowWidth from '../../hooks/useWindowWidth';
import "./styles.css"

interface NavProps {
  mobileTitle: string;
  title: string;
}

const Nav: React.FC<NavProps> = ({ mobileTitle, title }) => {
  const windowWidth = useWindowWidth();
  const isXlarge = windowWidth >= 1440; // Example breakpoint for x-large screens

  return (
    <nav>
      <p>{isXlarge ? title : <strong>{mobileTitle}</strong>}</p >
      <PageLinks />
    </nav>
  );
};

export default Nav;
