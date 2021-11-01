import PropTypes from 'prop-types';
import st from './Statistics.module.css';

export default function StatisticsList({ title, stats }) {
  return (
    <section className={st.statistics}>
           {title && <h2 className={st.title}>{title}</h2>}

      <ul className={st.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={st.item}>
            <span className={st.label}>{stat.label}</span>
            <span className={st.percentage}>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};