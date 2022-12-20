import styled from "styled-components";

export const NavAside = styled.div`
  position: fixed;
  background-color: #182635;
  width: 20%;
  height: 130vh;
  z-index: 1;
  top: -30px;
  padding-top: 8rem;
  color: lightgray;
`;

export const ContainerNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 400;
  font-size: 12px;
`;

export const ListItem = styled.li`
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #182635;
  cursor: pointer;
  &:hover {
    background-color: #2b3b45;
  }
`;
