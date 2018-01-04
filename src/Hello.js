import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    render() {
        let txt = this.props.txt;
        return (
            <div>
                <h2>Hello from Hello component</h2>
                <span>txt prop from variable: {txt}</span> <br/>
                <span>{this.props.txt}</span> <br />
                <span>count: {this.props.count}</span>
            </div>
        );
    }
}

Hello.propTypes = {
    txt: PropTypes.string,
    count: PropTypes.number.isRequired
};

Hello.defaultProps = {
    txt: "default value for txt prop",
    count: 10
};

export default Hello;