import Todo from "./Todo";

//functional component to render todo list
const TodoList = ({todoList, setTodoList})=> {
    return(<div>
            {todoList.map((todoItem)=>(
                <Todo 
                setTodoList={setTodoList} 
                key={todoItem.id} 
                todoItem={todoItem} 
                todoList={todoList} />
            ))}
           </div>)
}
export default TodoList;