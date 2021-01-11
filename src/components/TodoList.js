// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoItem from './Todo';
import ToDoForm from './TodoForm';

const TodoList = props => {

    const clearButtonClick = () => {
        props.listCompletedItemRemove();
    }

    return (
        <div>
            {
                props.todo.map(item => (
                    <TodoItem listItemToggle={props.listItemToggle} key={item.id} item={item} />
                ))
            }
            <button onClick={clearButtonClick}>
                Clear Completed Tasks
            </button>

        </div>
    )
}

export default TodoList;
