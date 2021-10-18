import TodoItem from "./TodoItem";

export default interface IProps {
    activeFilter: string;
    setActiveFilter: (activeFilter: string) => void;
    list: TodoItem[];
    setFilterList: (listItem: TodoItem[]) => void;
}