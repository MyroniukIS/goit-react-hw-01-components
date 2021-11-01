import PropTypes from 'prop-types';
import st from './FriendList.module.css';
import FriendListItem from './FriendListItem'

export default function FriendList({ friends = [] }) {
  return (
    <ul className={st.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={st.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};