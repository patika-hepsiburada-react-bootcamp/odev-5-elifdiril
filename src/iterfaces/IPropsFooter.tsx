import TodoItem from "./TodoItem";

//props for footer component 
export default interface IProps {
    activeFilter: string;
    setActiveFilter: (activeFilter: string) => void;
    list: TodoItem[];
    setList: (listItem: TodoItem[]) => void;
    setFilterList: (listItem: TodoItem[]) => void;
}