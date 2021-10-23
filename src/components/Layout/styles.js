import styled from "styled-components";

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;

  a {
    color: #fff;
    text-decoration: none;
    display: inline-block;

    & + a {
      margin-left: 16px;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  min-height: 372px;
  height: calc(100vh - 278px);
`;