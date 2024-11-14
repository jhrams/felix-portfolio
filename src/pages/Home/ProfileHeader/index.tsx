import {
  HOME_TITLE,
  HOME_DESCRIPTION,
  LETS_WORK_TOGETHER,
} from '../../../copies';

const ProfileHeader: React.FC = () => {
  return (
    <div className="profile-header">
      <img src="/src/assets/profile-with-layer.png" alt="Profile" className="profile" />
      <h1>{HOME_TITLE}</h1>
      <p>{HOME_DESCRIPTION}</p>
      <a href='/contact' className="contact-button">{LETS_WORK_TOGETHER}</a>
    </div>
  );
}

export default ProfileHeader;