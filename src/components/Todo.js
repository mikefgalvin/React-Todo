import React from 'react';

const TodoItem = props => {

    const itemClick = () => {
        props.listItemToggle(props.item.id)
    }

    return (
        <div className={`listItem${props.item.completed ? ' completed' : ''}`}>
                <p>{props.item.task}</p> 
                <div onClick={itemClick} className = 'checkmark'>
                    <p><span>&#10003;</span></p>
                </div>
        </div>
    )
}

export default TodoItem;