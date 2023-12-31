import React, { Component } from "react";
// import Container from "./components/Container";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import initialTodos from './todos.json';

// const colorPickerOptions = [
//     { label: 'red', color: '#F44336' },
//     { label: 'green', color: '#4CAF50' },
//     { label: 'blue', color: '#2196F3' },
//     { label: 'grey', color: '#607D8B' },
//     { label: 'pink', color: '#E91E63' },
//     { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component{
    state = {
        todos: initialTodos, 
        name: '',
    }

    deleteTodo = (todoId) => (
        this.setState(prevState => ({
            todos: prevState.todos.filter(todo => todo.id !== todoId)
        }))
    )

    hendleNameChange = (event) => {
        this.setState({inputValue: event.currentTarget.value});
    }

    render()
    {
        const {todos} = this.state;
        const totaltodoCount = todos.length;
        const completedTodoCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
        return (
            <div>
                <form>
                    <label>
                        Имя <input type="text" value={this.state.name} onChange={this.hendleNameChange}/>
                    </label>
                </form>
                <h1>Состояние компонента</h1>
                {/* <Dropdown /> */}
                {/* <Container initialValue={0} /> */}
                {/* <ColorPicker options={colorPickerOptions} /> */}
                <div>
                    <p>Общее кол-во: {totaltodoCount}</p>
                    <p>Кол-во выполненных: {completedTodoCount}</p>
                </div>
                <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

export default App;