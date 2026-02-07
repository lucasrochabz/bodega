import styles from './Loading.module.css';

// fix: mudar para não preencher a tela toda
const Loading = () => {
  return (
    <section className={styles.container}>
      <span className={`${styles.loading} anim-pulse`}>Carregando...</span>
      <div className="test"></div>
    </section>
  );
};

export default Loading;
