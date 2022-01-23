import React, {Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => {
        // State cannot be directly manipulated like this 
        // this.state.counter += 1;
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        return(
            <div>
                <div>You clicked on me {this.state.counter} times!</div>
                <button onClick={this.increaseCounter}>Click me!!</button>
            </div>
        )
    }
}

export default Counter;