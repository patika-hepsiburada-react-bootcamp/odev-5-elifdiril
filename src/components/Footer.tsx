import React, { useEffect, useState } from 'react';
import IPropsFilter from '../iterfaces/IPropsFilter';
import TodoItem from '../iterfaces/TodoItem';

const Footer: React.FC<IPropsFilter> = ({ activeFilter, setActiveFilter, list, setFilterList }: IPropsFilter) => {
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
        calcItems();

        if (activeFilter === 'all') {
            setFilterList(list)
        }
        else if(activeFilter === 'active'){
            setFilterList(list.filter((el: TodoItem) => !el.status))
        }
        else if(activeFilter === 'completed'){
            setFilterList(list.filter((el: TodoItem) => el.status))
        }
    }, [list, activeFilter])

    return (
        <div className="footer">
            <span className="todo-count">
                <strong className="todoLeft">{itemLeft} item left</strong>
            </span>
            <ul className="filters">
                <li>
                    <button className={activeFilter === 'all' ? 'completed' : 'selected'}
                        onClick={(e) => onClickFilter(e)}
                        name='all'>All</button>
                </li>
                <li>
                    <button className={activeFilter === 'active' ? 'completed' : 'selected'}
                        onClick={(e) => onClickFilter(e)}
                        name='active'>Active</button>
                </li>
                <li>
                    <button className={activeFilter === 'completed' ? 'completed' : 'selected'}
                        onClick={(e) => onClickFilter(e)}
                        name='completed'>Completed</button>
                </li>
            </ul>
            <button hidden={list.length === 0}
                className="clear-completed" >
                Clear completed
            </button>
        </div>
    );
};

export default Footer;