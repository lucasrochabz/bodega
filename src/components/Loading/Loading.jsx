import styles from './Loading.module.css';

const Loading = () => {
  return (
    <section className={styles.container}>
      <span className={styles.loading}>Carregando...</span>
    </section>
  );
};

export default Loading;
