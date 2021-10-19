import React, { useState } from 'react';
import IProps from '../iterfaces/IPropsItems';
import TodoItem from '../iterfaces/TodoItem';

const AddItem: React.FC<IProps> = ({ list, setList }: IProps) => {
    const [item, setItem] = useState<string>('');
    const [counter, setCounter] = useState<number>(2);
    const [toggleAll, setToggleAll] = useState<boolean>(false);

    const addNewItem = (e: React.SyntheticEvent) => {
        e.preventDefault();

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

    const handleToggleAll = () => {
        const newList = list.map((item: TodoItem) => {
            const updatedItem = {
                ...item,
                status: !toggleAll,
            };

            return updatedItem;
        });
        setList(newList);
        setToggleAll(!toggleAll)
    }

    return (
        <div className="new-todo">
            <form onSubmit={addNewItem} autoComplete="off">
                {list.length > 0 && <label className="toggle-all-label" >
                    <input className="toggle-all" type="checkbox" checked={toggleAll} onChange={handleToggleAll} />
                    Mark all as complete
                </label>}
                <input value={item} className="new-todo" onChange={handleChange} autoFocus placeholder="What needs to be done?" />
            </form>
        </div>
    );
};

export default AddItem;