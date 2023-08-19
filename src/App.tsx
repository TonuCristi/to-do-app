import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import AddBtn from "./components/AddBtn";
import Item from "./components/Item/Item";
import Form from "./components/Form/Form";
import { useState } from "react";

const Container = styled.div`
  background-color: #282c34;
  padding: 1.5rem;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppContainer = styled.div`
  width: 30%;
  height: 80%;
  background-color: #fff;
  margin: 4.8rem auto 0;
  border-radius: 2.7rem;
  padding: 1.6rem 3.2rem;
  position: relative;
`;

const Title = styled.h1`
  color: #1c7ed6;
  font-family: Roboto;
  font-weight: 900;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 1.6rem;
`;

const SearchAddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 0 auto 2.4rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: scroll;
  height: 70%;
  padding-right: 1.2rem;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 27px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #d0ebff;
    border-radius: 2.7rem;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #1c7ed6;
    border-radius: 2.7rem;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #1971c2;
  }
`;

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [toDoList, setToDoList] = useState([
    { id: 1, text: "Sa citesc la ora 9", isChecked: false },
    { id: 2, text: "Sa spal masina", isChecked: false },
    { id: 3, text: "Sa mananc ciocolata", isChecked: false },
  ]);
  const [search, setSearch] = useState("");

  return (
    <Container>
      <AppContainer>
        <Form
          isOpen={openForm}
          setOpenForm={setOpenForm}
          toDoList={toDoList}
          setToDoList={setToDoList}
        />
        <Title>To-do Appppppppp</Title>
        <SearchAddContainer>
          <SearchBar search={search} setSearch={setSearch} />
          <AddBtn isOpen={openForm} setOpenForm={setOpenForm} />
        </SearchAddContainer>
        <ItemContainer>
          {toDoList
            .filter((item) =>
              item.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, i) => (
              <Item
                text={item.text}
                id={item.id}
                toDoList={toDoList}
                setToDoList={setToDoList}
                isChecked={item.isChecked}
                key={i}
              />
            ))}
        </ItemContainer>
      </AppContainer>
    </Container>
  );
}

export default App;
