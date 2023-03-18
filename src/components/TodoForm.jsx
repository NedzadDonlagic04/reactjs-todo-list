import { useState } from "react";

function TodoForm(props) {
	const [value, valueSetter] = useState('');

	const changeHandler = e => valueSetter(e.target.value);

	const submitHandler = e => {
		e.preventDefault();

		if(value === '') return;

		const todo = {
			id: crypto.randomUUID(),
			text: value.trim().replace(/\s\s+/g, ' ')
		};

		props.onSubmit(todo);
	}

	return (
		<form 
			className="todo-form-container"
			onSubmit={submitHandler}
		>
			<input 
				type="text" 	
				value={value}
				placeholder="Todo goes here"
				className="todo-form-input"
				onChange={changeHandler}
			/>
			<button className="todo-form-button">Add</button>
		</form>
	);
}

export default TodoForm;
