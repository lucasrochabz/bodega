import { useState } from 'react';
import './Teste.css';
import { Button } from '../Button';

export const Teste = () => {
  const [mobile, setMobile] = useState(null);

  return (
    <div>
      <h2>Componente de Teste</h2>
      <nav className="nav-teste">
        <Button type="primary">X {mobile && 'Button 1'}</Button>
        <Button type="primary">X {mobile && 'Button 2'}</Button>
        <Button type="primary">X {mobile && 'Button 3'}</Button>
        <Button type="primary">X {mobile && 'Button 4'}</Button>
      </nav>
    </div>
  );
};
