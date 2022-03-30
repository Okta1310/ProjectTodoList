import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({isRefresh, setRefresh}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // memanggil API untuk mengambil data todos
    if (isRefresh) {
      fetch("http://localhost:3200/api/getdata")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          console.log(todos);
          setRefresh(false)
          // ketika Rest API sukses, simpan data dari response ke dalam state lokal
          setTodos(data);
          console.log(todos);
        })
        .catch((err) => {
          setRefresh(false)
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [isRefresh, setRefresh]);

  return (
    <ul id="todo-list">
      {todos.map((todo:any,i) => (
        <TodoItem todo={todo} key={i} />
      ))}
    </ul>
  );
};

export default TodoList;