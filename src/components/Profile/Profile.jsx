import PropTypes from 'prop-types';
import css from "./Profile.module.css";



export const Profile = (props) => {

  const { avatar, username, location, tag, stats: { followers, likes, views } } = props;

  return (
  
    <div className={css.profile}>
    
      <div className={css.description}>
        <img
          src={avatar}
          width="100"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>)
};


Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number) 
};


