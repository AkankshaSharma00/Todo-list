import React,{Component} from 'react';
import {Form,Button,Icon,Container} from 'semantic-ui-react';

class TodoList extends Component{
    render(){
        return(
            <Container>
                <Form onSubmit={this.props.addItem}>
                    <center>
                    <Form.Field>
                        <input 
                            type="text" 
                            placeholder ="Add Task" 
                            ref={this.props.inputElement}
                            value={this.props.currentItem.text}
                            onChange={this.props.handleInput}
                        />
                    </Form.Field>
                    <Button type="submit" animated color='blue'>
                        <Button.Content visible>Add Task</Button.Content>
                        <Button.Content hidden><Icon name="pencil alternate" /></Button.Content>
                    </Button>
                    </center>
                </Form>
            </Container>
        );
    }
}

export default TodoList;