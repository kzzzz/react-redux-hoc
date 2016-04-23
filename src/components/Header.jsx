import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component {
    authButton() {
        console.log('authButton: authenticated: ', this.props.authenticated);
        if (this.props.authenticated) {
            return (<button onClick={() =>this.props.authenticate(false)}>Sign Out</button>)
        }

        return (<button onClick={()=>this.props.authenticate(true)}>Sign In</button>)
    }

    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li>{this.authButton()}</li>
                </ul>
            </nav>
        );
    }
}
function mapStateToProps(state) {
    // console.log('map state to props', state);
    return {
        authenticated: state.authenticated
    };
}

export default connect(mapStateToProps, actions)(Header);
