import styled, { css } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  position: fixed;
  z-index: 10;
  background-color: #202020;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  @media (max-width: 720px) {
    padding-left: 1em;
    padding-right: 1em;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  @media (max-width: 720px) {
    padding: 15px 0;
  }
`;

export const NavTitle = styled.h1`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 2rem;
  padding: 1rem 0;
  font-size: 12px;
  ${({ idLogged }) =>
    idLogged &&
    css`
      padding: 0;
    `}
`;
