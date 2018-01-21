import  React, { Component } from 'react';

class EventHandler extends Component {
    constructor(props){
        super(props);
        this.state = {currentEvent: '-------'};
    }

    update = e => {
        this.setState({currentEvent: e.type});
    }

    render(){
        return (
            <div>
                <textarea cols='30' rows='10'
                    onKeyPress={this.update}
                    onCopy={this.update}
                    onCut={this.update}
                    onPaste={this.update}
                    onFocus={this.update}
                    onBlur={this.update}
                    onDoubleClick={this.update}
                    onTouchStart={this.update}
                    onTouchMove={this.update}
                    onTouchEnd={this.update} />
                <p>Current event: {this.state.currentEvent}</p>
            </div>
        )
    }
}

export default EventHandler;