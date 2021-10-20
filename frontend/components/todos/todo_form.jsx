import React from "react";
import TodoList from './todo_list';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        const lastEle = this.props.todos[this.props.todos.length - 1];
        this.state = {
            id: this.props.todos.indexOf(lastEle) + 2,
            title: "",
            body: "",
            done: false
        }

        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updateTitle(e) {
        this.setState({ title: e.target.value });
    }

    updateBody(e) {
        this.setState({ body: e.target.value });
    }

    updateDone(e) {
        this.setState({ done: !!e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        const lastEle = this.props.todos[this.props.todos.length - 1];
        this.setState({
            id: this.props.todos.indexOf(lastEle) + 2,
            title: "",
            body: "",
            done: false
        });
    }

    render() {
        return (
            <form>
                <h2>Add Todo Item</h2>
                <label>Title:
                    <input type="text" name="" onChange={this.updateTitle} />
                </label>
                <br></br>
                <label>Body:
                    <input type="text" name="" onChange={this.updateBody} />
                </label>
                <br></br>
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}