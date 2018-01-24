import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state = {val: 0, m: 0};
    }

    update = () => {
        this.setState({val: this.state.val + 1});
    }

    componentWillMount(){
        console.log('componentWillMount');
        this.setState({m: 2});
    }

    componentDidMount(){
        console.log('componentDidMount');
        console.log(ReactDOM.findDOMNode(this));
        this.inc = setInterval(this.update, 500);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.inc);
    }

    render(){
        console.log("render");
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }
}

class LifecycleWrapper extends Component{
    mount = () => {
        ReactDOM.render(<Lifecycle />, document.getElementById('LifecycleComponent'));
    }

    unmount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('LifecycleComponent'));
    }

    render(){
        return(
            <div>
                <button onClick={this.mount}>Mount</button>
                <button onClick={this.unmount}>UnMount</button>
                <div id='LifecycleComponent'></div>
            </div>
        );
    }
}

export default LifecycleWrapper;