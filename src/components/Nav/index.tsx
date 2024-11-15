import PageLinks from "../PageLinks";
import useWindowWidth from '../../hooks/useWindowWidth';
import { useNavbarHeight } from '../../context/NavbarHeightContext';

import "./styles.css"

interface NavProps {
  mobileTitle: string;
  title: string;
}

const Nav: React.FC<NavProps> = ({ mobileTitle, title }) => {
  const windowWidth = useWindowWidth();
  const isXlarge = windowWidth >= 1440; // Example breakpoint for x-large screens

  const { navbarRef } = useNavbarHeight();

  return (
    <nav ref={navbarRef}>
      <a href="/">{isXlarge ? title : <strong>{mobileTitle}</strong>}</a >
      <PageLinks />
    </nav>
  );
};

export default Nav;
