import React, { Component } from 'react';
import './style.sass'


class Counter extends Component {
    constructor(){
        super();

        // setInterval(()=>{
        //     this.setState({
        //         counter: this.state.counter+1
        //     }, ()=>
        //         console.log(this.state)
            
        //     )
        // },1000)
        // this.onMinusClick = this.onMinusClick.bind(this)
        // this.onPlusClick = this.onPlusClick.bind(this)
        console.log()
    }
    // state = {
    //     counter: 0
    // }

    
    

    render() {
        return (
            <div className='counter'>
                <button onClick={this.props.onMinusClick}>-</button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.onPlusClick}>+</button>
            </div>
        );
    }
}

export default Counter;