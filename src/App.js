import Header from './components/Header';
import Form from './components/Form';
import {useState} from "react";
import TodoList from './components/TodoList';

function App() {
  //state for todos
  const [todo,setTodo] = useState('')
  //state for todo list
  const [todoList,setTodoList] = useState([])
  return (
    <div className="App">
     <Header />
     <Form 
     todo={todo} 
     setTodo={setTodo} 
     todoList={todoList} 
     setTodoList={setTodoList} />
     <TodoList setTodoList={setTodoList} todoList={todoList}/>

    </div>
  );
};

export default App;
