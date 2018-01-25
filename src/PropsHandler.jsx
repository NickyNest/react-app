import React, {Component} from 'react';

class PropsHandler extends Component{
    constructor(props){
        super(props);
        this.state = {increasing: false};
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        this.setState({increasing: nextProps.val > this.props.val});
    }

    shouldComponentUpdate(nextProps, nextstate){
        console.log('shouldComponentUpdate');
        return nextProps.val % 5 === 0;
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
        console.log(`prevProps: ${prevProps.val}`)
    }

    render(){
        console.log(this.state.increasing);
        
        return (
            <button onClick={this.props.increaseVal}>
                {this.props.val}
            </button>
        )
    }
}

PropsHandler.defaultProps = {val: 0}

export default PropsHandler;