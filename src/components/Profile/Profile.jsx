import PropTypes from 'prop-types';
import css from "./Profile.module.css";


export const Profile = (props) => {

  const { avatar, username, location, tag, stats: { followers, likes, views } } = props;

  return (
  
    <div className={css.profileConatiner}>
    
      <div className={css.profileDescription}>
        <img
          src={avatar}
          width="100"
          alt="User avatar"
          className={css.profileAvatar}
        />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.userStats}>
        <li className={css.userStatsItem}>
          <span className={css.userStatsLabel}>Followers</span>
          <span className={css.userStatsQuantity}>{followers}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userStatsLabel}>Views</span>
          <span className={css.userStatsQuantity}>{views}</span>
        </li>
        <li className={css.userStatsItem}>
          <span className={css.userStatsLabel}>Likes</span>
          <span className={css.userStatsQuantity}>{likes}</span>
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


