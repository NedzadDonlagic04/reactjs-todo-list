import { useState } from "react";

function TodoForm(props) {
	const colorClasses = ['', 'yellow', 'red'];

	const [value, valueSetter] = useState(''),
	      [colorIndex, colorIndexSetter] = useState(0);

	const changeHandler = e => valueSetter(e.target.value);

	const submitHandler = e => {
		e.preventDefault();

		if(value === '') return;

		const todo = {
			id: crypto.randomUUID(),
			text: value.trim().replace(/\s\s+/g, ' '),
			addedClass: colorClasses[colorIndex]
		};

		props.onSubmit(todo);

		colorIndexSetter( val => (val + 1 === colorClasses.length)? 0 : val + 1);
		valueSetter('');
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
				className={"todo-form-input " + colorClasses[colorIndex]}
				onChange={changeHandler}
			/>
			<button className={"todo-form-button " + colorClasses[colorIndex]}>Add</button>
		</form>
	);
}

export default TodoForm;
