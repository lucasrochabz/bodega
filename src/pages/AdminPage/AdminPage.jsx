import { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import styles from './AdminPage.module.css';

const AdminPage = () => {
  const [img, setImg] = useState({});

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <form className={styles.wrapper}>
          <Input label="Nome" />

          <input
            className="file"
            type="file"
            id="img"
            name="img"
            onChange={handleImgChange}
          />

          <Button variant="primary">Enviar</Button>
        </form>

        <div>
          {img.preview && (
            <div
              className={styles.preview}
              style={{ backgroundImage: `url('${img.preview}')` }}
            ></div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AdminPage;
