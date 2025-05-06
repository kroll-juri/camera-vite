import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div
      className={styles.loader}
      role="status"
      aria-label="Загрузка"
    >
      <div></div>
      <div></div>
    </div>
  );
};
