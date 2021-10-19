import TodoItem from "./TodoItem";

//IProps for Items component
export default interface IProps {
    list: TodoItem[];
    setList: (listItem: TodoItem[]) => void;
}