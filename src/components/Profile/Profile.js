import PropTypes from 'prop-types';
import defaultImage from './placeHolder.png';
import css from './profile.module.css';

const Profile = ({ avatar = defaultImage, username, tag, location, stats }) => {
  return (
    <div className={css.profile}>
      <div className="description">
        <img src={avatar} alt={username} className={css.avatar} width={200} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsItemLabel}>Followers</span>
          <span className={css.statsItemQuantity}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsItemLabel}>Views</span>
          <span className={css.statsItemQuantity}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsItemLabel}>Likes</span>
          <span className={css.statsItemQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
