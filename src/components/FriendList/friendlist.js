import PropTypes from 'prop-types';
import s from './friendlist.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.status : s.statusof}></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.number,
  isOnline: PropTypes.bool,
};
