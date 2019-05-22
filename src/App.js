import React,{Component} from 'react';
import './App.css';

import TodoList from './components/TodoList';
import TodoItems from './components/TodoItems';

class App extends Component {
  constructor(){
    super();

    this.state={
      items : [],
      currentItem :{text:'',key:''}
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleInput = e =>{
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem
    })
  }

  addItem = e =>{
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text !== ''){
      console.log(newItem)
      const items=[...this.state.items,newItem]
      this.setState({
        items: items,
        currentItem:{text:'',key:''}
      })
    }
  }

  render(){
    return (
      <div>
        <TodoList 
          addItem = {this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems enteries={this.state.items} />
      </div>
    );
  }
}

export default App;
