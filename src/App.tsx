import './App.css';
import React, { useState } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';
import TodoItem from './iterfaces/TodoItem';

const listInitial: TodoItem[] = [
  { id: 0, todo: "Shopping", status: true },
  { id: 1, todo: "Studying TSX", status: false }
];

function App(): JSX.Element {
  // if status true => job is done, else job is still active
  const [list, setList] = useState<TodoItem[]>(listInitial);

  return (
    <div className="todoapp">
      <h1 className="header">Todos</h1>
      <AddItem list={list} setList={setList} />
      <List list={list} setList={setList} />
    </div>
  );
}

export default App;
