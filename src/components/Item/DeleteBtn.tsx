import styled from "styled-components";
import * as S from "../styles";
import { FaXmark } from "react-icons/fa6";

const Btn = styled(S.Btn)`
  color: #f03e3e;

  &:hover {
    border: 3px solid #f03e3e;
  }
`;

const Icon = styled(FaXmark)`
  font-size: 2rem;
`;

type DeleteProps = {
  itemId: number;
  toDoList: any[];
  setToDoList: (val: any[]) => void;
};

export default function DeleteBtn({
  toDoList,
  setToDoList,
  itemId,
}: DeleteProps) {
  const handleClick = () => {
    setToDoList([...toDoList.filter((item) => item.id !== itemId)]);
  };

  return (
    <Btn onClick={handleClick}>
      <Icon />
    </Btn>
  );
}
