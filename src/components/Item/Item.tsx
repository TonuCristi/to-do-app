import styled from "styled-components";
import DeleteBtn from "./DeleteBtn";
import CheckBtn from "./CheckBtn";

const Container = styled.div`
  border: 2px solid #1c7ed6;
  border-radius: 2.7rem;
  padding: 0.4rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
`;

interface TextProps {
  isChecked: boolean;
}

const Text = styled.div<TextProps>`
  font-size: 1.6rem;
  color: #1c7ed6;
  position: relative;
  opacity: ${(props) => (props.isChecked ? 0.5 : 1)};
`;

const Line = styled.div<TextProps>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background-color: ${(props) => (props.isChecked ? "#0ca678" : "transparent")};
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

type ItemProps = {
  text: string;
  id: number;
  toDoList: object[];
  setToDoList: (val: any[]) => void;
  isChecked: boolean;
};

export default function Item({
  text,
  id,
  toDoList,
  setToDoList,
  isChecked,
}: ItemProps) {
  return (
    <Container>
      <Text isChecked={isChecked}>
        {text}
        <Line isChecked={isChecked} />
      </Text>
      <BtnContainer>
        <DeleteBtn toDoList={toDoList} setToDoList={setToDoList} itemId={id} />
        <CheckBtn toDoList={toDoList} setToDoList={setToDoList} itemId={id} />
      </BtnContainer>
    </Container>
  );
}
