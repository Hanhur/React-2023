import React from "react";

const Controls = ({onIncrement, onDecrement}) => (
    <div className="Container_controls">
        <button type="button" onClick={onIncrement}>Увеличить на 1</button>
        <button type="button" onClick={onDecrement}>Увеличить на 1</button>
    </div>
);

export default Controls;