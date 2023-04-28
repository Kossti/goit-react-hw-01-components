import css from './friendsList.module.css';
import FriendsListItem from './FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(item => (
        <FriendsListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
