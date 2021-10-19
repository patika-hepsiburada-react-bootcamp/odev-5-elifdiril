import TodoItem from "./TodoItem";

//Props for list component
export default interface IProps {
    filterList: TodoItem[];
    list: TodoItem[];
    setList: (listItem: TodoItem[]) => void;
}