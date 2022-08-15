import React, { useState } from "react";
import styled from "@emotion/styled";
import GRCard from "./components/cards/GRCard";
import TodoForm from "./TodoForm";
import TodoActions from "./TodoActions";

interface AppProps {}

const App = ({}: AppProps) => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  return (
    <Container>
      <GRCard
        title={"Test technique GeoRide :"}
        subTitle={
          <SubTitle>
            Faire une todo list en React avec <p>une api</p>
          </SubTitle>
        }
      />
      <TodoForm addTodo={addTodo} />
      <TodoActions todos={todos} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitle = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: underline wavy #fcb466;

  > p {
    margin-left: 5px;
    font-style: italic;
  }
`;
