import useWindowWidth from '../../../hooks/useWindowWidth';

import {
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
} from '../../../copies';

import "./styles.css"

const ProfileHeader: React.FC = () => {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth > 1023;
  const isTabletAndDesktop = windowWidth > 680;

  return (
    <>
      <div className="profile-header">
        <img src="/src/assets/profile-with-layer.png" alt="Profile" className="profile" />
        <h1>{HOME_TITLE}</h1>
        <p>{HOME_DESCRIPTION}</p>
        <a href='/contact' className="contact-button">{LETS_WORK_TOGETHER}</a>
        {isTabletAndDesktop && <img src="/src/assets/line.svg" alt="Line" className="line" />}
        {isDesktop && <img src="/src/assets/profile-header-dots.png" alt="Profile-dots" className="profile-dots" />}
      </div>
    </>
  );
}

export default ProfileHeader;