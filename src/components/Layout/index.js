import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

import { Container, Nav } from './styles';

export const LayoutContext = createContext();

export default function Layout() {
  return (
    <BrowserRouter>
      <Header />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/5">Post</Link>
      </Nav>
      <Container>
        <Routes />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
