import styled from "styled-components";
import * as S from "./styles";
import { FaPlus } from "react-icons/fa6";

const Btn = styled(S.Btn)`
  color: #0ca678;

  &:hover {
    border: 3px solid #0ca678;
  }
`;

const Icon = styled(FaPlus)`
  font-size: 2rem;
`;

type Props = {
  isOpen: boolean;
  setOpenForm: (val: boolean) => void;
};

export default function AddBtn({ isOpen, setOpenForm }: Props) {
  return (
    <Btn onClick={() => setOpenForm(!isOpen)}>
      <Icon />
    </Btn>
  );
}
