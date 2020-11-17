import React from 'react';

class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            isOn: !this.state.isOn,
        })
    }
    render() {
        const bulbOn = "https://drive.google.com/thumbnail?id=1sbqqXFferp9soxpHhHsHom0eF6cliMik&authuser=0&sz=w1920-h866";
        const bulnOff = "https://drive.google.com/thumbnail?id=1LSRGeu-1ixc3tWHEUtj9fXIhneQzM__V&authuser=0&sz=w1920-h866";
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.isOn ? "Off" : "On"}</button>
                <img src={this.state.isOn ? bulbOn : bulnOff} alt="bulb-img" />
            </div>
        )
    }
}

export default Switch;