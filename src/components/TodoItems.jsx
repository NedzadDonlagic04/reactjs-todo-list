import { CiCircleRemove } from 'react-icons/ci';

function TodoItems(props) {
	return (
		<ul className="todo-items-container">
			{props.todos.map((val, i) => 
				<li className={'todo-item ' + val.addedClass} key={i}>
					<p className="todo-item-text">{val.text}</p>
					<button className={"item-delete-button " + val.addedClass} onClick={() => props.onClick(val.id)}><CiCircleRemove /></button>
				</li>)}
		</ul>
	);
}

export default TodoItems;
