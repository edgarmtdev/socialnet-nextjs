import { Field } from "formik";
import styled from "styled-components";
import FormCustom from "./components/Form";

export const Button = styled.button`
  background-color: #084bb8;
  color: white;
  font-weight: 500;
  padding: 6px;
  border-radius: 4px;
  &:hover {
    background-color: #0b61ee;
    transition: 0.5s ease-in-out;
  }
`;

export const FormContainer = styled(FormCustom)`
  background-color: #1c1c1c;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  gap: 1rem;
  padding: 16px;
`;

export const FieldStyled = styled(Field)`
  border-radius: 4px;
  outline: none;
  padding: 4px;
`;

export const ContainerInputFile = styled.div`
  position: relative;

  &::before {
    width: 32px;
    height: 32px;
    background-color: #5678ef;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    content: "Img";
    &:hover {
      opacity: 0.8;
    }
  }

  input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    width: 200px;
    height: 32px;
    cursor: pointer;
  }
`;
