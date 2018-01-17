import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    constructor(props){
        super(props);
        this.state = {txt: 'this the state text'};
    }

    onChange = e => {
        this.setState({txt: e.target.value});
    }

    render() {
        let txt = this.props.txt;
        return (
            <div>
                <h2>Hello from Hello component</h2>
                <span>txt prop from variable: {txt}</span> <br/>
                <span>{this.props.txt}</span> <br />
                <span>count: {this.props.count}</span> <br/>
                <Widget update={this.onChange} />
                <span>State: {this.state.txt}</span> <br/>
                <Button>React</Button>
            </div>
        );
    }
}

const Widget = (props) =>
    <input type='text' onChange={props.update} />

const Button = ({children}) => <button>{children}</button>

Hello.propTypes = {
    txt: PropTypes.string,
    count: PropTypes.number.isRequired
};

Hello.defaultProps = {
    txt: "default value for txt prop",
    count: 10
};

export default Hello;