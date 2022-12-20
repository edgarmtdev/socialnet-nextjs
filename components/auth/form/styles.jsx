import styled from "styled-components";
import FormCustom from ".";

export const FormStyled = styled(FormCustom)`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  width: 35%;
  padding: 40px;
  border-radius: 8px;
  gap: 1.3rem;
  background-color: #0e141b;
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
