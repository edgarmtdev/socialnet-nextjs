import styled from "styled-components";
import FormCustom from ".";

export const FormStyled = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #1c1c1c;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 16px;
  height: 90%;
`;

export const ImageContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: auto;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
`;

export const FormContainer = styled(FormCustom)`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  gap: 2rem;

  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 820px) {
    margin-top: 3rem;
    width: 65%;
  }
  @media (max-width: 500px) {
    width: 95%;
    padding: 35px 20px;
  }
`;

export const FieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  p {
    width: 60%;
    font-size: 12px;
    text-align: right;
    color: #c0c0c0;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const AuthButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
