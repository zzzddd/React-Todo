import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";




const data = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false,
 
  },
  {
    task: "Bake Cookies",
    id: 2,
    completed: false,
   
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      data
    };
  }

  addItem = item => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
      show: true
    };
    if (item !== "") {
      this.setState({
        data: [...this.state.data, newItem]
      });
    }
  };

  clearCompleted = () => {
    this.setState({ data: this.state.data.filter(item => !item.completed) });
  };

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    });
  };

  render() {
    console.log("inside toggle", this.state.data);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm data={this.state.data} addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        <TodoList data={this.state.data} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
