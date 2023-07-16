import React, { Component } from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
    state = {
        activeOptionIdx: 0,
    }

    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker_option'];
        if (index === this.state.activeOptionIdx) 
        {
            optionClasses.push('ColorPicker_option--active');
        }
        return optionClasses.join(' ');
    }
    render() {
        return (
            <div className="ColorPicker">
                <h2 className="ColorPicker_title">Color Picker</h2>
                <div>
                    {this.props.options.map(({ label, color }, index) => (                     
                        <button
                            key={label}
                            className={this.makeOptionClassName(index)}
                            style={{ backgroundColor: color }}>
                        </button>  
                    ))}
                </div>
            </div>
        )
    }
}

export default ColorPicker;