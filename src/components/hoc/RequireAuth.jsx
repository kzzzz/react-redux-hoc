import React from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
    class Authentication extends React.Component {
        // To be able to use this.context.router, define contextTypes
        static contextTypes = {
            router: React.PropTypes.object
        };

        componentWillMount() {
            // console.log('authenticated', this.props.authenticated);
            if (!this.props.authenticated) {
                this.context.router.push('/forbidden');
            }
        }

        componentWillUpdate(nextProps){
            if (!nextProps.authenticated) {
                this.context.router.push('/');
            }
        }

        render() {
            // console.log('Authenticated', this.props.authenticated);
            // console.log('this.context', this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.authenticated
        };
    }

    return connect(mapStateToProps)(Authentication);
}