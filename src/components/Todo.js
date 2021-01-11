import React from 'react';

const TodoItem = props => {

    const itemClick = () => {
        props.listItemToggle(props.item.id)
    }

    return (
        <div onClick={itemClick} className={`listItem${props.item.completed ? ' completed' : ''}`}>
                <p>{props.item.task}</p> 
        </div>
    )
}

export default TodoItem;