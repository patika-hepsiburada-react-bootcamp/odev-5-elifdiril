import React from 'react';
import TodoItem from '../iterfaces/TodoItem';
import IProps from '../iterfaces/IPropsList';

const List: React.FC<IProps> = ({ filterList, list, setList }: IProps) => {

    const deleteHandle = (element: TodoItem) => {
        const remainderTodo : TodoItem[] = list?.filter((el: TodoItem) => el !== element);
        setList(remainderTodo);
    }

    const checkButtonHandle = (id: number) => {
        const newList = list.map((item: TodoItem) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    status: !item.status,
                };

                return updatedItem;
            }
            return item;
        });
        setList(newList);
    }

    return (
        <div>
            <ul className="view">
                {filterList?.map((item: TodoItem) => {
                    return (
                        <div key={item.id} className="todo-list">
                            <li className={item.status ? "completed" : ""}>
                                <input  className="toggle" type="checkbox" onChange={() => checkButtonHandle(item.id)} checked={item.status ? true : false} />
                                <label>{item.todo}</label>
                                <button className="destroy" onClick={() => deleteHandle(item)} />
                            </li>
                        </div>)
                })
                }
            </ul>
        </div>
    );
}

export default List;