

export const Profile = (props) => {

  const { avatar, username, location, tag, stats: { followers, likes, views } } = props;

  return (
  
    <div className="profile">
    
      <div className="description">
        <img
          src={avatar}
          width ="100"
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>)
}