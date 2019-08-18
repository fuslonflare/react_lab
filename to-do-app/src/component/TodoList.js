import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}><u onClick={this.props.handleDelete.bind(this, item)}>[Remove]</u> {item.text}</li>
        ))}
      </ul>
    );
  }
}

export default TodoList