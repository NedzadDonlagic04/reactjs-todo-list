import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { useState } from "react";

function TodoList() {
	const [todos, todosSetter] = useState([]);

	const submitHandler = todo => {
		const newTodos = [todo, ...todos];

		todosSetter(newTodos);
	}

	const clickHandler = id => {
		const index = todos.findIndex(todo => todo.id === id);

		const newList = [...todos];
		newList.splice(index, 1);

		todosSetter(newList);
	}

	return (
		<div className="todo-list-container">
			<header>
				<h1>What's on today's agenda?</h1>
			</header>
			<TodoForm onSubmit={submitHandler}/>
			<TodoItems todos={todos} onClick={clickHandler}/>
		</div>
	);
}

export default TodoList;
