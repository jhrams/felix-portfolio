import {
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
} from '../../../copies';
import { BASE_URL } from '../../../constants';

import "./styles.css"

const ProfileHeader: React.FC = () => (
  <>
    <div className="profile-header">
      <img src="profile-with-layer.png" alt="Profile" className="profile" />
      <h1>{HOME_TITLE}</h1>
      <p>{HOME_DESCRIPTION}</p>
      <a href={`${BASE_URL}/#/contact`} className="button contact-button">{LETS_WORK_TOGETHER}</a>
      <img src="line.svg" alt="Line" className="line" />
      <img src="profile-header-xl-dots.svg" alt="Profile-xl-dots" className="profile-header-xl-dots" />
      <img src="profile-header-l-dots.svg" alt="Profile-l-dots" className="profile-header-l-dots" />
    </div>
  </>
);

export default ProfileHeader;