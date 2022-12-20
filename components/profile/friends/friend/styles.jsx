import styled from "styled-components";

export const CardFriend = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 6px;
`;

export const NameFriend = styled.p`
  font-size: 14px;
  color: lightgray;
`;
