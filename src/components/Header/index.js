import React, { useContext } from 'react';

import { Context } from '../../App';

import { Container } from './styles';


export default function Header() {
const { theme, handleToggleTheme } = useContext(Context);

  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={handleToggleTheme}>
        {theme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}