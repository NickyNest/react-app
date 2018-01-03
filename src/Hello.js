import  React, { Component } from 'react';

class Hello extends Component {
    render() {
        let txt = this.props.txt;
        return (
            <div>
                <h2>Hello from Hello component</h2>
                <span>txt props from variable: {txt}</span> <br/>
                <span>{this.props.txt}</span>
            </div>
        );
    }
}

export default Hello;