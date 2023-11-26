import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {

    
  return (
    <section className={css.statsContainer}>
      {title && <h2 className={css.statsTitle}>{title}</h2>}

      <ul className={css.statsList}>
                
        {stats.map(({ id, label, percentage }) => <li key={id} className={css.statsListItem}>
          <span className={css.statsLabel}>{label}</span>
          <span className={css.statsPercentage}>{percentage}%</span>
        </li>)}
      </ul>
    </section>
        
  )
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object)
};

