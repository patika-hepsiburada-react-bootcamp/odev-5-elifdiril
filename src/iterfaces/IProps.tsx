import TodoItem from "./TodoItem";

export default interface IProps {
    list: TodoItem[];
    setList: (listItem: TodoItem[]) => void;
}