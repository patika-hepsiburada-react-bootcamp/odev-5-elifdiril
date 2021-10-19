import React, { useEffect, useState } from 'react';
import IPropsFooter from '../iterfaces/IPropsFooter';
import TodoItem from '../iterfaces/TodoItem';

const Footer: React.FC<IPropsFooter> = ({ activeFilter, setActiveFilter, list, setList, setFilterList }: IPropsFooter) => {
    const [itemLeft, setItemLeft] = useState<number>(list?.length || 0);

    const onClickFilter = ({ target }: React.MouseEvent) => {
        const filterType = (target as HTMLInputElement).name;
        setActiveFilter(filterType);
    }

    useEffect(() => {
        async function calcItems() {
            const remainderItem: number = list?.filter((el: TodoItem) => !el.status).length;
            setItemLeft(remainderItem)
        }
        //For Footer, shows how many items left not completed
        calcItems();

        // Filters start
        if (activeFilter === 'all') {
            setFilterList(list)
        }
        else if (activeFilter === 'active') {
            setFilterList(list.filter((el: TodoItem) => !el.status))
        }
        else if (activeFilter === 'completed') {
            setFilterList(list.filter((el: TodoItem) => el.status))
        }
        // Filters end
    }, [list, activeFilter, setFilterList]);

    const onClickClearCompleted = () => {
        const clearCompletedTodo = list.filter((el: TodoItem) => !el.status);
        setList(clearCompletedTodo);
    }

    return (
        <div className="footer">
            <span className="todo-count">
                <strong className="todoLeft">{itemLeft} item left</strong>
            </span>
            <ul className="filters">
                <li>
                    <button className={activeFilter === 'all' ? 'selected' : 'completed'}
                        onClick={(e) => onClickFilter(e)}
                        name='all'>All</button>
                </li>
                <li>
                    <button className={activeFilter === 'active' ? 'selected' : 'completed'}
                        onClick={(e) => onClickFilter(e)}
                        name='active'>Active</button>
                </li>
                <li>
                    <button className={activeFilter === 'completed' ? 'selected' : 'completed'}
                        onClick={(e) => onClickFilter(e)}
                        name='completed'>Completed</button>
                </li>
            </ul>
            <button hidden={list.length === 0}
                className="clear-completed" onClick={onClickClearCompleted}>
                Clear completed
            </button>
        </div>
    );
};

export default Footer;