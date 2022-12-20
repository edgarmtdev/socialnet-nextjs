import styled from "styled-components";

export const SectionToWrite = styled.div`
  position: fixed;
  display: flex;
  gap: 20px;
  bottom: 0;
  left: 20%;
  width: 80%;
  padding: 10px;
  background-color: #212e36;

  @media (max-width: 768px) {
    left: 15%;
    width: 85%;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  background-color: rgb(51 65 85);
  border-radius: 10px;
  padding: 8px;
  color: lightgray;
  font-size: 14px;
`;

export const ButtonSend = styled.button`
  background-color: rgb(0 65 85);
  padding: 0 8px;
  border-radius: 50%;
  &:hover {
    opacity: 0.8;
  }
`;
