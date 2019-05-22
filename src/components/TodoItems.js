import React,{Component} from 'react'

class TodoItems extends Component{
    createTasks(item){ 
        return (<li key={item.key}>{item.text}</li>);
    }

    render(){
        const todoEnteries = this.props.enteries
        const listItems = todoEnteries.map(this.createTasks)

        return(
            <ul>{listItems}</ul>
        );
    }
}

export default TodoItems;