import './App.css';
import React, { useState } from 'react';
import AddItem from './components/AddItem';
import List from './components/List';
import TodoItem from './iterfaces/TodoItem';
import Footer from './components/Footer';

const listInitial: TodoItem[] = [
  { id: 0, todo: "Shopping", status: true },
  { id: 1, todo: "Studying TSX", status: false }
];

function App(): JSX.Element {
  // if status true => job is done, else job is still active
  const [list, setList] = useState<TodoItem[]>(listInitial);
  const [filterList, setFilterList] = useState<TodoItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  return (
    <div className="todoapp">
      <h1 className="header">Todos</h1>
      <AddItem list={list} setList={setList} />
      <List filterList={filterList} list={list} setList={setList} />
      <Footer list={list} activeFilter={activeFilter} setActiveFilter={setActiveFilter} setFilterList={setFilterList} />
    </div>
  );
}

export default App;
