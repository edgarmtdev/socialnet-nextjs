import styled, { keyframes, css } from "styled-components";

const animate = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`;

export const Menu = styled.div`
  display: none;
  position: absolute;
  right: 0px;
  top: 52px;
  background-color: #202020;
  width: 25%;
  font-size: 12px;
  ${({ primary }) =>
    primary &&
    css`
      animation: ${animate} 0.4s ease;
      display: block;
      border-radius: 10px;
      z-index: 20;
    `}
  @media(max-width: 900px) {
    width: 40%;
  }
  @media (max-width: 500px) {
    width: 70%;
  }
`;

export const User = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px;
  border-color: rgb(100 116 139);
  font-size: 14px;
`;

export const Item = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  margin: 8px 0;
  &:hover {
    background-color: rgb(71 85 105);
  }
  ${({ signout }) =>
    signout &&
    css`
      color: rgb(220 38 38);
      font-weight: 700;
    `}
`;
