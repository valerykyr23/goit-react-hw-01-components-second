
import PropTypes from 'prop-types';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
<div className = {css.friendsContainer}>
        <ul className={css.friendsList}>
            {friends.map(item =>
                
                <li key={item.id} className={css.friendListItem}>
                    <span className={css.friendStatus}>{item.isOnline}</span>
                    <img className={css.friendAvatar} src={item.avatar} alt="User avatar" width="48" />
                    <p className={css.friendName}>{item.name}</p>
                </li>
            )}
            </ul>
            </div>
    )
};


FriendList.propTypes = {

    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string

};