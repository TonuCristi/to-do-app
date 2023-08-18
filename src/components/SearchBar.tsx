import styled from "styled-components";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import * as S from "./styles";

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  border: 2px solid #1c7ed6;
  padding: 0.8rem 1.2rem;
  border-radius: 2.7rem;
  transition: all ease 0.2s;
  box-shadow: 0rem 0rem 2.4rem 0.6rem ${(props) => props.color};
`;

const Search = styled(S.Input)`
  font-size: 1.6rem;

  &::placeholder {
    color: #1c7ed6;
  }
`;

const Icon = styled(FaMagnifyingGlass)`
  font-size: 1.6rem;
  color: #1c7ed6;
  opacity: 0.5;
`;

export default function SearchBar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (val: string) => void;
}) {
  const [color, setColor] = useState("transparent");

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    setColor("#1c7ed6");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor("transparent");
    }, 100);
  }, [search]);

  return (
    <SearchBarContainer color={color}>
      <Search type="text" placeholder="Search..." onChange={handleChange} />
      <Icon />
    </SearchBarContainer>
  );
}
