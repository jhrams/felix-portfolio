import {
  HOME_TITLE,
  HOME_DESCRIPTION,
} from '../../../copies';

const ProfileHeader: React.FC = () => {
  return (
    <div className="profile-header">
      <h1>{HOME_TITLE}</h1>
      <p>{HOME_DESCRIPTION}</p>
    </div>
  );
}

export default ProfileHeader;