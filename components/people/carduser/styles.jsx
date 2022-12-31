import styled from "styled-components";

export const Card = styled.article`
  width: 250px;
  height: 100%;
  background-color: #1c1c1c;
  padding: 14rem 1.25rem 1.25rem 1.25rem;
  border-radius: 8px;
  position: relative;
  img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  p {
    cursor: pointer;
    display: inline-block;
    &:hover {
      text-decoration-line: underline;
    }
  }
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
