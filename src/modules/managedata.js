class Todo {
  constructor() {
    this.todos = [];
  }

  addTodo(description) {
    this.todos.push({
      index: this.todos.length + 1,
      completed: false,
      description,
    });
    return this.todos;
  }

  removeTodo(index) {
    if (index > this.todos.length) {
      return null;
    }
    this.todos = this.todos.filter((singleTodo) => singleTodo.index !== index);
    const helpertodos = [];
    let helpertodo;
    this.todos.forEach((singleTodo) => {
      helpertodo = {
        index: helpertodos.length + 1,
        completed: singleTodo.completed,
        description: singleTodo.description,
      };
      helpertodos.push(helpertodo);
    });
    this.todos = helpertodos;
    return this.todos;
  }

  editTodo(index, description) {
    this.todos = this.todos.map((singleTodo) => {
      if (singleTodo.index === index) {
        singleTodo.description = description;
      }
      return singleTodo;
    });
    return this.todos;
  }

  clearCompleted() {
    this.setTodos(this.todos.filter((singleTodo) => singleTodo.completed === false));
    const helpertodos = [];
    let helpertodo;
    this.todos.forEach((singleTodo) => {
      helpertodo = {
        index: helpertodos.length + 1,
        completed: singleTodo.completed,
        description: singleTodo.description,
      };
      helpertodos.push(helpertodo);
    });
    this.todos = helpertodos;
    return this.todos;
  }

  complete(index) {
    this.todos = this.todos.map((singleTodo) => {
      if (singleTodo.index === index) {
        singleTodo.completed = !singleTodo.completed;
      }
      return singleTodo;
    });
    return this.todos;
  }

  getTodos() {
    return this.todos;
  }

  setTodos(newTodoes) {
    this.todos = newTodoes;
  }
}

module.exports = Todo;