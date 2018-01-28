import React, {Component} from 'react';

const HOC = (InnerComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    update = () => {
        this.setState({count: this.state.count + 1});
    }

    render(){
        return(
            <InnerComponent 
                {...this.props}
                {...this.state}
                update={this.update}
            />
        )
    }
}

class HOCComponent extends Component {
    render(){
        return(
            <div>
                <ButtonHOC>button</ButtonHOC><br/>
                <LabelHOC>lebel</LabelHOC>
            </div>
        )
    }
}

const Button = (props) => <button onClick={props.update}>{props.children} - {props.count}</button>

class Label extends Component {
    render(){
        return(
            <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
        )
    }
}

const ButtonHOC = HOC(Button);
const LabelHOC = HOC(Label);

export default HOCComponent;