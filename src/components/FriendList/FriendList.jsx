import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (

        <ul class="friend-list">
            {friends.map(item =>
                
                <li key={item.id} class="item">
                    <span class="status">{item.isOnline}</span>
                    <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
                    <p class="name">{item.name}</p>
                </li>
            )}
        </ul>
    )
};


FriendList.propTypes = {

    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string

};