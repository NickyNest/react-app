import React, {Component} from 'react';

class RefHandler extends Component{
    constructor(props){
        super(props);
        this.state = {a: '', b: ''};
    }

    update = () => {
        this.setState({
            a: this.a.refs.input.value, 
            b: this.refs.b.value
        });
    }

    render(){
        return(
            <div>
                <Input ref={component => this.a = component} update={this.update} />{this.state.a} <br/>
                <input ref='b' onChange={this.update} />{this.state.b}
            </div>
        );
    }
}

class Input extends Component {
    render(){
        return(
            <div>
                <input ref='input' type='text' onChange={this.props.update} />
            </div>
        )
    }
}

export default RefHandler;