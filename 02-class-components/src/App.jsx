import React from "react";
import Container from "./components/Container/Container";

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
    return (
        <div>
            <h1>Состояние компонента</h1>
            <Container initialValue={0} />
        </div>
    )
}

export default App;