import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // Render list - X
  // Input function to add to list - X
  // function to toggle list to completed: true - x
  // function to remove strike list - X

  listItemAdd = (taskName) => {
    const item = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    const newTodo = [...this.state.todo, item]

    this.setState({
      todo: newTodo
    });
  }

  listItemToggle = (taskId) => {
    this.setState({
      todo: this.state.todo.map(item=>{
        if (item.id === taskId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return(item);
      })
    });
  }

  listCompletedItemRemove = () => {
    const newTodo = this.state.todo.filter(item => {
      return(!item.completed)
    });

    this.setState({
      todo: newTodo
    });
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <div>
          <TodoForm listItemAdd={this.listItemAdd}/>
        </div>
        <div>
          <TodoList todo={this.state.todo} listItemToggle={this.listItemToggle} listCompletedItemRemove={this.listCompletedItemRemove}/>
        </div>
      </div>
    );
  }
}

export default App;
