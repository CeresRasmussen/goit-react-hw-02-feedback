import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <li className={css.statistics_item}>Good: {good}</li>
        <li className={css.statistics_item}>Neutral: {neutral}</li>
        <li className={css.statistics_item}>Bad: {bad}</li>
        <li className={css.statistics_item}>Total: {total}</li>
        <li className={css.statistics_item}>
          PositiveFeedback:{positivePercentage}%
        </li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
