import TodoItem from "./TodoItem";

export default interface IProps {
    activeFilter: string;
    setActiveFilter: (activeFilter: string) => void;
    list: TodoItem[];
    setList: (listItem: TodoItem[]) => void;
    setFilterList: (listItem: TodoItem[]) => void;
}