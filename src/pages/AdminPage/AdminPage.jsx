import { useState } from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import './AdminPage.css';

const AdminPage = () => {
  const [img, setImg] = useState({});

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };

  return (
    <section className="post-container">
      <form className="post-product">
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
            className="preview"
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default AdminPage;
