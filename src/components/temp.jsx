import React, { Component } from 'react';

class Temp extends Component {
    state = {
        count: 0,
    };
    render() {
        return (
            <div>
                Temp
            </div>
        );
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;

    }
}

export default Temp;