import React, { useState } from 'react';
import IProps from '../iterfaces/IProps';
import TodoItem from '../iterfaces/TodoItem';

const AddItem: React.FC<IProps> = ({ list, setList }: IProps) => {
    const [item, setItem] = useState<string>('');
    const [counter, setCounter] = useState<number>(2);

    const addNewItem = () => {
        if (item !== "") {
            const newTodos: TodoItem[] = [...list, { id: counter + 1, todo: item, status: false }];
            setList(newTodos);
        }
        setItem('');
        setCounter(counter + 1)
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setItem(e.target.value);
    };

    return (
        <div className="new-todo">
            <input value={item} onChange={handleChange} autoFocus placeholder="What needs to be done?" />
            <button onClick={addNewItem}>Add</button>
        </div>
    );
};

export default AddItem;