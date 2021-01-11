import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          inputValue: ''
        }
      }

      formChanges = e => {
          this.setState({
              inputValue: e.target.value
          });
      };

      formSubmit = (e) => {
          e.preventDefault();
          this.props.listItemAdd(this.state.inputValue);
          this.setState({
              inputValue:''
          });
      }

    render() {
        return (
            <form onSubmit={this.formSubmit}>
                <input value={this.state.inputValue} onChange={this.formChanges} type='text' name='item' placeholder='Type a task'/>
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;