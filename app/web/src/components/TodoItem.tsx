const TodoItem = ({ todo, setRefresh }) => {

    const updateTodo = () => {
      todo.status = !todo.status
  
      fetch("http://localhost:3200/api/putdata" + todo.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
      }).then(() => {
        console.log('todo updated.')
        setRefresh(true)
      })
    }
  
    const deleteTodo = () => {
      fetch("http://localhost:3200/api/deletedata" + todo.id, {
        method: "DELETE",
      }).then(() => {
        console.log('todo deleted.')
        setRefresh(true);
      });
    };
  
    return (
      <li className={`${todo.status ? "checked" : ""}`}>
        <div onClick={updateTodo}>{todo.title}</div> 
        <span className="close" onClick={deleteTodo}>x</span>
      </li>
    );
  };
  
  export default TodoItem;