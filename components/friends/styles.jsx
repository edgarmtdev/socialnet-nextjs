import styled from "styled-components";

export const Container = styled.section`
  background-color: #212e36;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  border-radius: 8px;
  padding: 2.5rem;
  @media (max-width: 700px) {
    padding: 1.5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const Title = styled.h1`
  margin-bottom: 2.5rem;
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 500;
  color: lightgray;
`;

export const Friends = styled.div`
  display: grid;
  grid-template-columns: repeat(2 1fr);
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
