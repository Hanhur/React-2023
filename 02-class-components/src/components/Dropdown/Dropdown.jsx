import React, {Component} from "react";
import "./Dropdown.css";

class Dropdown extends Component {
    state = {
        visible: false,
    }

    toggle = () => {
        this.setState(prevState => ({visible: !prevState.visible}));
    }

    render()
    {
        return (
            <div className="Dropdown">
                <button className="Dropdown_toggel" type="button" onClick={this.toggle}>
                    {this.state.visible ? 'Скрыть' : 'Показать'}
                </button>
                {this.state.visible && (<div className="Dropdown_menu">Выпадающее меню</div>)}
            </div>
        )
    }
}

export default Dropdown;