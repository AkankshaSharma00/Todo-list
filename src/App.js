import React,{Component} from 'react';
import 'semantic-ui-css/semantic.min.css'

import {Header} from 'semantic-ui-react';
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
    this.deleteItem = this.deleteItem.bind(this);
  }

  // Method to handle inputs from the user.
  handleInput = e =>{
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem
    })
  }

  // Method to add items to the list.
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


  // Method to delete items from the list
  deleteItem = key =>{
    const filteredItems = this.state.items.filter(item =>{
      return item.key !== key
    })
    this.setState({
      items : filteredItems,
    })
  }

  render(){
    return (
      <div>
        <Header color="blue" textAlign="center">TODO LIST</Header>
        <TodoList 
          addItem = {this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems key={this.state.currentItem.key} enteries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
