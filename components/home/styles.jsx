import styled from "styled-components";

export const Feed = styled.section`
  padding-top: 1rem;
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1.8fr 1fr;
  gap: 3rem;

  div {
    width: 100%;
  }

  @media (max-width: 1000px) {
    max-width: 920px;
    gap: 1rem;
    margin: 0 auto;
  }

  @media (max-width: 912px) {
    max-width: 500px;
    display: block;
  }

  @media (max-width: 520px) {
    margin: 0 10px;
    gap: 0.5rem;
  }
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  background-color: #1c1c1c;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  height: 25rem;
  padding: 20px;
  border-radius: 10px;
  color: #dadada;
  position: relative;
  @media (max-width: 912px) {
    height: 14rem;
    margin-bottom: 3rem;
  }
`;

export const Button = styled.button`
  background-color: #111111;
  color: white;
  font-weight: 500;
  padding: 6px 1rem;
  border-radius: 10px;
  &:hover {
    background-color: #212121;
  }
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  object-fit: cover;
  height: 30%;
  width: 100%;

  @media (min-width: 912px) {
    height: 15%;
  }
`;
