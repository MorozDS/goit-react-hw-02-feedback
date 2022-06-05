import PropTypes from 'prop-types';
import s from './friendlist.module.css';

export default function FriendListItem({ id, isOnline, avatar, name }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.status : s.statusof}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
