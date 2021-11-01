import PropTypes from 'prop-types';
import st from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
    {isOnline
        ? <span className={`${st.status} ${st.online}`}>o</span>
        : <span className={`${st.status} ${st.offline}`}>x</span>
      }
      <img className={st.avatar} src={avatar} alt={name} width="48" />
      <p className={st.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};