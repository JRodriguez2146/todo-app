import { useState } from "react"
import ListItem from "./ListItem";

//todo component
export default function Todo () { 
    //state for todos
    const  [todo, setTodo] = useState("");
    //state for todoList
    const [todoList, setTodoList] = useState([]);

    //function to handle input change
    const handleChange = (event)=> {
        setTodo(event.target.value)
    }
    //function to handle todo list submissions from user
    const handleSubmit = (event)=> {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        setTodo("");
        console.log(todoList);
    }
    return (<div>
                <form onSubmit={handleSubmit}>
                    <input value={todo} onChange={handleChange} type="text" />
                    <button type="submit">Add</button>
                </form>
                {todoList.map((item)=>(
                    <ListItem key={item} name={item}/>
                    ))}
            </div>);
}