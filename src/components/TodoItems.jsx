function TodoItems({todos}) {
	return (
		<ul>
			{todos.map((val, i) => <li key={i}>{val.text}</li>)}
		</ul>
	);
}

export default TodoItems;
