import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from "../Button";
import Title from '../Title';

import { ThemeContext } from '../../context/ThemeContext';

export default function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`,
}
