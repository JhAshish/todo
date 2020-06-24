import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false

      },
      {
        id: 2,
        title: 'Meeting',
        completed: false

      },
      {
        id: 3,
        title: 'book reading',
        completed: false

      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed;
      }

      return todo;
    }) });
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    console.log(this.state.todos)
    return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}>
        </Todos>
      </div>
    </div>
  );
  }
}

export default App;
