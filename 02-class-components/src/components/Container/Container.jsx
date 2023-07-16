import React, {Component} from "react";
import Controls from "./Controls";
import Value from "./Value";
import './Container.css';

class Container extends Component{
    // constructor()
    // {
    //     super();
    //     this.state = {
    //         value: 0,
    //     }
    // }
    static defaultProps = {
        initialValue: 0,
    }
    state = {
        value: this.props.initialValue,
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            }
        });
    }
    handleDecrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value - 1,
            }
        });
    }

    render()
    {
        return(
            <div className="Container">
                <Value value={this.state.value}/>
                <Controls 
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </div>
        )
    }
}

export default Container;