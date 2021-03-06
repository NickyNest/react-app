import  React, { Component } from 'react';
import EventHandler from './EventHandler';
import RefHandler from './RefHandler';
import LifecycleWrapper from './Lifecycle';
import PropsHandler from './PropsHandler';
import HOCComponent from './HOCComponent';
import PropTypes from 'prop-types';

class Hello extends Component {
    constructor(props){
        super(props);
        this.state = {txt: 'this the state text', val: 0};
    }

    onChange = e => {
        this.setState({txt: e.target.value});
    }

    increaseVal = () => {
        this.setState({val: this.state.val + 1});
    }

    render() {
        let txt = this.props.txt;
        return (
            <div>
                <h2>Hello from Hello component</h2>
                <span>txt prop from variable: {txt}</span> <br/>
                <span>{this.props.txt}</span> <br />
                <span>count: {this.props.count}</span> <br/><br />
                <Widget update={this.onChange} placeholder='Add text' />
                <span>State: {this.state.txt}</span> <br/><br />
                <Button>React</Button> <br /><br />
                <EventHandler />
                <hr/>
                <h3>Work wirh refs</h3>
                <RefHandler />
                <hr/>
                <h3>Component Lifecycle</h3>
                <LifecycleWrapper />
                <hr/>
                <h3>Control React Component Updates When New Props Are Received</h3>
                <PropsHandler increaseVal={this.increaseVal} val={this.state.val} />
                <hr/>
                <h3>Working with Higher Order Components</h3>
                <HOCComponent />
            </div>
        );
    }
}

const Widget = (props) =>
    <input type='text' onChange={props.update} placeholder={props.placeholder} />

Widget.propTypes = {
    placeholder(props, propName, component){
        if(!(propName in props)){
            return new Error(`missing ${propName}`);
        }
        if(props[propName].length < 5){
            return new Error(`${propName} is too short`);
        }
    }
};

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