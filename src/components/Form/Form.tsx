import styled from "styled-components";
import * as S from "../styles";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

interface CompProps {
  isOpen: boolean;
}

const BlurContainer = styled.div<CompProps>`
  position: absolute;
  border-radius: 2.7rem;
  background-color: rgb(170, 170, 170, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(2px);
  z-index: 1;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #1c7ed6;
  border-radius: 2.7rem;
  width: 60%;
  height: 60%;
  box-shadow: 0 1.2rem 2.4rem 0.8rem rgb(170, 170, 170);
  padding: 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  z-index: 2;
`;

const TitleIconBox = styled.div`
  position: relative;
  width: 100%;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2rem;
`;

const Icon = styled(FaXmark)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;

const Input = styled(S.Input)`
  border: 2px solid #fff;
  border-radius: 2.7rem;
  padding: 0.4rem 0.8rem;
  font-size: 1.4rem;
  color: #fff;

  &::placeholder {
    color: #fff;
    opacity: 0.5;
  }
`;

const AddBtn = styled.button`
  font-family: inherit;
  border: none;
  background: none;
  color: #1c7ed6;
  background-color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 0.4rem 2rem;
  border-radius: 2.7rem;
  cursor: pointer;
`;

const Error = styled.div`
  background-color: #ffc9c9;
  border-radius: 2.7rem;
  padding: 0.4rem 2.4rem;
  font-size: 1.4rem;
  color: #f03e3e;
`;

export type Props = {
  isOpen: boolean;
  setOpenForm: (val: boolean) => void;
  toDoList: object[];
  setToDoList: (val: any[]) => void;
};

export default function Form({
  isOpen,
  setOpenForm,
  toDoList,
  setToDoList,
}: Props) {
  const [toDo, setToDo] = useState({
    id: toDoList.length,
    text: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setToDo({ id: toDoList.length + 1, text: e.target.value });
  };

  const handleClick = () => {
    if (!!toDo.text) {
      setToDoList([...toDoList, toDo]);
      setOpenForm(!isOpen);
      setError("");
      setToDo({ id: toDoList.length, text: "" });
    } else {
      setError("You didn't write anything!");
    }
  };

  return (
    <BlurContainer
      isOpen={isOpen}
      onClick={() => {
        setError("");
        setToDo({ id: toDoList.length, text: "" });
        setOpenForm(!isOpen);
      }}
    >
      <Container onClick={(e) => e.stopPropagation()}>
        {!!error && <Error>{error}</Error>}
        <TitleIconBox>
          <Title>Add to-do</Title>
          <Icon
            onClick={() => {
              setError("");
              setToDo({ id: toDoList.length, text: "" });
              setOpenForm(!isOpen);
            }}
          />
        </TitleIconBox>
        <Input
          type="text"
          placeholder="Write something..."
          value={toDo.text}
          onChange={handleChange}
        />
        <AddBtn onClick={handleClick}>Add</AddBtn>
      </Container>
    </BlurContainer>
  );
}
