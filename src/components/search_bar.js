import React, { Component } from 'react';

class SeachBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value)
    }
}


export default SeachBar;