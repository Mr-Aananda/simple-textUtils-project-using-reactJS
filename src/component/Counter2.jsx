import React, { Component } from 'react'
import Counter from "./Counter";

export default class Counter2 extends Component {
    state = {
        num: 0
    };

    decrementNum = () => {
        console.log(this.state.num);

        this.setState({
            num: this.state.num - 1
        });
    }
    render() {
        return (
            <div>
                <Counter decrement={ this.decrementNum }/>
            </div>
        )
    }
}
