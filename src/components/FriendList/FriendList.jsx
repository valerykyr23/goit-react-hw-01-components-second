
import PropTypes from 'prop-types';
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (
<div className = {css.friendsContainer}>
        <ul className={css.friendsList}>
            {friends.map(({id,isOnline,avatar,name}) =>
                
                <li key={id} className={css.friendListItem}>
                    <span className={`${css.friendStatus} ${css[isOnline]}`}>{isOnline}</span>
                    <img className={css.friendAvatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.friendName}>{name}</p>
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
    isOnline: PropTypes.bool

};