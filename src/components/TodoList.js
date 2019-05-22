import React,{Component} from 'react';

class TodoList extends Component{
    render(){
        return(
            <form onSubmit={this.props.addItem}>
                <input 
                    type="text" 
                    placeholder ="Add Task" 
                    ref={this.props.inputElement}
                    value={this.props.currentItem.text}
                    onChange={this.props.handleInput}
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default TodoList;