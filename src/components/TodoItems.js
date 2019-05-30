import React,{Component} from 'react'
import {List,Button,Feed,Icon,Container} from 'semantic-ui-react'


class TodoItems extends Component{
    constructor(){
        super();

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item){ 
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return (
            <Feed>
                <Feed.Event>
                    <Feed.Content>
                        <List as='li' key={item.key}>{item.text}</List>
                        <Feed.Date>{date}-{month}-{year}</Feed.Date>
                    </Feed.Content>
                    <Button animated color='blue' onClick={()=> this.props.deleteItem(item.key)} >
                        <Button.Content visible><Icon name="trash alternate" /></Button.Content>
                        <Button.Content hidden>Remove</Button.Content>
                    </Button>
                </Feed.Event>
            </Feed>
        );
    }

    render(){
        const todoEnteries = this.props.enteries
        const listItems = todoEnteries.map(this.createTasks)

        return(
            <center>
            <Container>
                <List as='ol'>{listItems}</List>
            </Container>
            </center>
        );
    }
}

export default TodoItems;