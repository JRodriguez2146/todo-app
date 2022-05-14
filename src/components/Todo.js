import styles from '../style.module.css'

//functional component for todos to be rendered in todo list
const Todo = ({todoItem, todoList, setTodoList})=> {

    //method to remove todo from list
    const deleteTodo = ()=> {
        setTodoList(todoList.filter((item) => item.id !==todoItem.id));

    };
    return(<div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>{todoItem.name}</h3>
                <button onClick={deleteTodo} className={styles.deleteBtn}>Done</button>
             </div>
           </div>)
}
export default Todo;