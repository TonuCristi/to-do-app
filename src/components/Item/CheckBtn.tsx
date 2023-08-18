import styled from "styled-components";
import * as S from "../styles";
import { FaCheck } from "react-icons/fa6";

const Btn = styled(S.Btn)`
  color: #0ca678;

  &:hover {
    border: 3px solid #0ca678;
  }
`;

const Icon = styled(FaCheck)`
  font-size: 2rem;
`;

type CheckProps = {
  itemId: number;
  toDoList: any[];
  setToDoList: (val: any[]) => void;
};

export default function CheckBtn({
  itemId,
  toDoList,
  setToDoList,
}: CheckProps) {
  const handleClick = () => {
    setToDoList([
      ...toDoList.map((item) =>
        item.id === itemId
          ? { id: item.id, text: item.text, isChecked: !item.isChecked }
          : { id: item.id, text: item.text, isChecked: item.isChecked }
      ),
    ]);
  };

  return (
    <Btn onClick={handleClick}>
      <Icon />
    </Btn>
  );
}
