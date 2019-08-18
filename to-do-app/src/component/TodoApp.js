import React from 'react'
import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList
          handleDelete={this.handleDelete}
          items={this.state.items}
        />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            Enter Task
          </label>
          <br />
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleDelete(deleteItem) {
    var newItems = this.state.items.filter((item) => {
      return item !== deleteItem
    });

    this.setState({
      items: newItems
    });
  }
}

export default TodoApp