import React, { useState, useMemo, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

export const Context = createContext();

function App() {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevState) => prevState === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    //TODO: Passar onToggleTheme e selectedTheme vie Context
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <Context.Provider value={{ theme, handleToggleTheme }}>
        <GlobalStyle />
        <Layout />
      </Context.Provider>
    </ThemeProvider>
  );
};

export default App;
