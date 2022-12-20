import styled from "styled-components";

export const Title = styled.h1`
  font-size: 28px;
  color: lightgray;
  text-align: center;
`;

export const ButtonAuth = styled.button`
  background: linear-gradient(90deg, #e866a7, #a783f8, #3b82f6);
  border-radius: 2px;
  padding: 6px;
  color: white;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.01);
    transition: 0.5s;
  }
`;
