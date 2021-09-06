import React, { Component } from 'react';

class Counter extends Component {
    // constructor() {
    //     // first we have to call the constructor which is the parent(base) class that's why we are using the super() 
    //     super();
    //     console.log("constructor", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p> There are no tags!</p>;

    //     return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            
    // }

    // handleIncrement = product => {
    //     this.setState({value: this.state.value + 1});
    // }

    
    
    // styles = {
    //     fontSize : 15,
    //     fontWeight: 'bold'
    // }
    render() {
        return (
        <div>
            {/* {this.props.children} */}
            <h4>{this.props.children}</h4>
            <button 
            onClick={this.handleReset}
            className = "btn btn-primary btn-sm m-2"
            >Reset</button>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)} 
                className="btn btn-seecondary btn-sm">Increment</button>
            <button 
                onClick={() => this.props.onDelete(this.props.counter.id)} 
                className = "btn btn-danger btn-sm m-2">Delete</button>
            {/* {this.state.tags.length === 0 && 'Please create a new tag!'} */}
            {/* {this.renderTags()} */}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

     formatCount() {
         const {value} = this.props.counter;
      return value === 0 ? 'Zero' : value;

    }
}
 
export default Counter;