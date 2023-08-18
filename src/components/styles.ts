import styled from "styled-components";

export const Btn = styled.button`
  font-size: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0.2rem;
  border: 3px solid transparent;
  transition: all ease 0.2s;
  border-radius: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  font-family: Roboto;
  border: none;
  outline: none;
  width: 100%;
  background: none;

  &::placeholder {
    opacity: 0.5;
    font-family: inherit;
  }
`;
