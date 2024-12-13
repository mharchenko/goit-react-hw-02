import styles from './Description.module.css';

const Notification = ({ message }) => (
  <p className={styles.description}>{message}</p>
);

export default Notification;
