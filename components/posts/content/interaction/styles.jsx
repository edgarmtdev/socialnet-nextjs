import styled from "styled-components";

export const SectionInteraction = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: rgb(100 116 139);
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 12px;
`;

export const InteractiveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 4px;
  margin: 3px;
  width: 100%;
  border-radius: 8px;
  &:hover {
    background-color: rgb(51 65 85);
  }
`;
