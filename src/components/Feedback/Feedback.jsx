import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div className={styles.feedback}>
    <h2 className={styles.title}>Feedback Statistics</h2>
    <p className={styles.statistic}>Good: {feedback.good}</p>
    <p className={styles.statistic}>Neutral: {feedback.neutral}</p>
    <p className={styles.statistic}>Bad: {feedback.bad}</p>
    <p className={styles.statistic}>Total Feedback: {totalFeedback}</p>
    <p className={styles.statistic}>
      Positive Feedback: {positiveFeedbackPercentage}%
    </p>
  </div>
);

export default Feedback;
