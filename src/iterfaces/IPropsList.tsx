import TodoItem from "./TodoItem";

export default interface IProps {
    filterList: TodoItem[];
    list: TodoItem[];
    setList: (listItem: TodoItem[]) => void;
}