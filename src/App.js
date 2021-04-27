import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/header';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import './App.css';
import Todos from './components/Todos';
import uuid from 'uuid';


class App extends Component{
  state={
    todos: [
    
    ],
    
  }
 
  // Toggle Complete
  markComplete=(id)=>{
   this.setState({todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed=!todo.completed;
    }
    return todo;
   }) });
}
// Toggle Complete
setPriority=(id,newPriority)=>{
  
  this.setState({todos: this.state.todos.map(todo => {
   if(todo.id === id){
     todo.priority=newPriority;
   }
      return todo;
  }) });
}
// Toggle Complete
setDate=(id,newDate)=>{
  this.setState({todos: this.state.todos.map(todo => {
   if(todo.id === id){
     todo.date=newDate;
   }
   return todo;
  }) });
}
// Toggle Complete
setNotes=(id,newNotes)=>{
  this.setState({todos: this.state.todos.map(todo => {
   if(todo.id === id){
    
     todo.notes=newNotes;
   }
   return todo;
  }) });
}
// Add To Do
addToDo=(title)=>{
  const newToDo={
    id:uuid.v4(),
    title:title,
    priority:'low',
    notes:'',
    date:new Date(),
    completed:false
  }
  this.setState({todos:[...this.state.todos,newToDo]});
}

// Delete To Do items
 delToDo=(id)=>{
  this.setState({todos:[...this.state.todos.filter( todo => todo.id!==id)]});
 }
  render(){
    return (
      <Router>
          <div className="App">
            <Header></Header>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo} setDate={this.setDate} setNotes={this.setNotes} setPriority={this.setPriority} ></Todos>
              </React.Fragment>
            )}/>
            <Route path="/about"
            component={About}
            />
          </div>
      </Router>
      
    );
  };
}


export default App;
