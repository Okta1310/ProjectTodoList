import { useState } from "react";

const Header = ({setRefresh}) => {
  const [title, setTitle] = useState("");

  // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
  const addTodo = () => {
	
  const newTodo = {title, status: false}

	
  fetch('http://localhost:3200/api/getpost', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
			
// ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
			
setTitle("")
			
setRefresh(true)

			
setTimeout(() => {
				
alert('new todo added.')
			
}, 500)
        });
  }

  return (
    <div id="todo-header" className="header">
      <h2>MY TODOLIST NIH!</h2>
	
  <input 
		
  type="text"
		
  value={title}
		
  onChange={(e) => setTitle(e.target.value)}
	
  />
      <span className="add-button" onClick={addTodo}>Add</span>
    </div>
  );
};

export default Header;