import React, { Component } from 'react';
import Counter from "./counter"

class Counters  extends Component {
    state = { 
        counters : [
            {id:1, value:3},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
     }

     handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter)
        counters[index] = {...counters}
        counters[index].value ++;
        this.setState({counters})
    }

     handleDelete = counterId => {
         const counters = this.state.counters.filter(c =>  c.id !== counterId);
         this.setState({counters:counters})
     }
     handleReset = () => {
        this.state.counters.map(c => {
            c.value = 0;
            return c;
        })
    }
    render() { 
        return (<div>    
            {this.state.counters.map(counter => 
            <Counter 
                key={counter.id} 
                onDelete = {this.handleDelete}
                onIncrement = {this.handleIncrement}
                counter = {counter}
                >
                <h4>Counter{counter.id}</h4>
            </Counter>
                )}   
            </div>  );
    }
}
 
export default Counters;