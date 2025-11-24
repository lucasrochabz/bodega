import styles from './Loading.module.css';

const Loading = () => {
  return (
    <section className={styles.container}>
      <span className={`${styles.loading} anim-pulse`}>Carregando...</span>
      <div className="test"></div>
    </section>
  );
};

export default Loading;
