import React, { Component } from 'react';

class Counter extends Component {
    state={ 
        value: this.props.value,
        tags: ["tag1" , "tag2" , "tag3"]
    };
    product = 0
    // constructor() {
    //     // first we have to call the constructor which is the parent(base) class that's why we are using the super() 
    //     super();
    //     console.log("constructor", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    renderTags() {
        if(this.state.tags.length === 0) return <p> There are no tags!</p>;

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
            
    }

    handleIncrement = product => {
        this.setState({count: this.state.value + 1});
        console.log(product);
    }
    
    // styles = {
    //     fontSize : 15,
    //     fontWeight: 'bold'
    // }
    render() {
        console.log('props',this.props) 
        return (
        <div>
            {/* {this.props.children} */}
            <h4>{this.props.children}</h4>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={(product) => this.handleIncrement(product)} className="btn btn-seecondary btn-sm">Increment</button>
            {this.state.tags.length === 0 && 'Please create a new tag!'}
            {this.renderTags()}
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

     formatCount() {
         const {value: count} = this.state;
      return count === 0 ? 'Zero' : count;

    }
}
 
export default Counter;