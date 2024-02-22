import css from './statistics.module.css';

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.Statistics_list}>
      <li className={css.Statistics_item}>Good: {good}</li>
      <li className={css.Statistics_item}>Neutral: {neutral}</li>
      <li className={css.Statistics_item}>Bad: {bad}</li>
      <li className={css.Statistics_item}>Total: {total}</li>
      <li className={css.Statistics_item}>
        Positive Feedback: {positivePercentage}%
      </li>
    </ul>
  );
};
