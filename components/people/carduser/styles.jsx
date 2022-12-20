import styled from "styled-components";

export const Card = styled.article`
  width: 250px;
  height: 100%;
  background-color: #2b3b45;
  padding: 14rem 1.25rem 1.25rem 1.25rem;
  border-radius: 8px;
  position: relative;
`;

export const Button = styled.button`
  width: 100%;
  background-color: rgb(239 68 68);
  margin-top: 1rem;
  padding: 4px;
  background-color: ${({ color }) =>
    color === "blue" ? "#2A669F" : "#EF4444"};
  border-radius: 8px;
`;
