import styles from '../style.module.css'
import shortid from 'shortid';

const Form = ({todo, setTodo, todoList, setTodoList}) => {

    //method to handle user input
    const handleChange = (event)=> {
        setTodo(event.target.value);
    };
    //method to handle todo list submissions from user
    const handleSubmit = (event)=> {
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id:shortid.generate()}])
        console.log(todoList);
        setTodo('');
    };
    return( <div className={styles.todoForm}>
                <form onSubmit={handleSubmit}>
                    <input 
                    value={todo} 
                    onChange={handleChange} 
                    className={styles.todoInput} 
                    placeholder="Add Todo">
                    </input>
                    <button type='submit' className={styles.todoBtn}>Add</button>
                </form>
            </div>);
};
export default Form;