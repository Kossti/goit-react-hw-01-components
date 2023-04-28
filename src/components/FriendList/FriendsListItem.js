import PropTypes from 'prop-types';
import css from './friendsList.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendsItem}>
      <span className={isOnline ? css.statusIsOnline : css.statusIsOffLine}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.friendsName}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendsListItem;
