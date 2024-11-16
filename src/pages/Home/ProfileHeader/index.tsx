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
      <img src={`profile-with-layer.png`} alt="Profile" className="profile" />
      <h1>{HOME_TITLE}</h1>
      <p>{HOME_DESCRIPTION}</p>
      <a href={`${BASE_URL}/#/contact`} className="contact-button">{LETS_WORK_TOGETHER}</a>
      <img src={`line.svg`} alt="Line" className="line" />
      <img src={`profile-header-dots.png`} alt="Profile-dots" className="profile-dots" />
    </div>
  </>
);

export default ProfileHeader;