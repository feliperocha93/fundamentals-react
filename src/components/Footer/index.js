import React, { useContext } from 'react';

import { Context } from '../../App';

import { Container } from './styles';


export default function Footer() {
const { theme, handleToggleTheme } = useContext(Context);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}