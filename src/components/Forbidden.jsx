import React from 'react';
import {Component} from 'react';

class Forbidden extends Component {
    render() {
        return (
            <div className="error">You are not allowed to view protected resources!</div>
        );
    }
}

export default Forbidden;
