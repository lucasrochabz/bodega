import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMedia } from '../../hooks';
import { Button } from '../Button';
import './Teste.css';

export const Teste = () => {
  const mobile = useMedia('(max-width: 800px)');
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    console.log('clicou no menu');
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  return (
    <section>
      <h2>Sejá bem vindo</h2>
      {mobile && (
        <Button type="secondary" onClick={handleMobileMenu}>
          Menu
        </Button>
      )}

      {mobile && mobileMenu && (
        <nav className="nav-teste">
          <Link to="/">Home</Link>
          <Button type="primary">{mobile ? 'Button 1' : 'Teste 1'}</Button>
          <Button type="primary">{mobile ? 'Button 2' : 'Teste 2'}</Button>
          <Button type="primary">{mobile ? 'Button 3' : 'Teste 3'}</Button>
        </nav>
      )}
    </section>
  );
};
