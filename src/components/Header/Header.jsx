import React from 'react';
import s from './Header.module.css';

class HeaderC extends React.Component {

    state = {
        inputValue: "",
    }

    onChangeVal = (e) => {
        let text = e.currentTarget.value;
        this.setState({
            inputValue: text
        });
    }

    sendNote = () => {
        if(this.state.inputValue.length > 0) this.props.addNote(this.state.inputValue);
        this.setState({
            inputValue: ""
        });
    }

    render() {
        return (
            <div className={s.content}>
                <h2>Todo List</h2>
                <div className={s.input}>
                    <input onChange={this.onChangeVal} value={this.state.inputValue} placeholder="Start to write..."></input>
                    <button onClick={this.sendNote}><i className="fa fa-plus"></i></button>
                </div>
            </div>
        );
    }
}

export default HeaderC;