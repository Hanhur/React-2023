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
        const {visible} = this.state;
        return (
            <div className="Dropdown">
                <button className="Dropdown_toggel" type="button" onClick={this.toggle}>
                    {visible ? 'Скрыть' : 'Показать'}
                </button>
                {visible && (<div className="Dropdown_menu">Выпадающее меню</div>)}
            </div>
        )
    }
}

export default Dropdown;