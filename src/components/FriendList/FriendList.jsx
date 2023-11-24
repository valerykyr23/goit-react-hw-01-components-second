export const FriendList = ({friends}) => {
    return (

<ul class="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) => <li key={id} class="item">
                <span class="status">{isOnline}</span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
                <p class="name">{name}</p>
</li>)}
</ul>
    )
}


