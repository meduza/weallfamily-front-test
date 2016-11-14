import React, { Component, PropTypes } from 'react';
//import React from 'react';
//import { Component, PropTypes } from 'react';
import getCookie from '../helpers/getCookie.js';

//xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));

class Login extends Component {
    constructor(){
        super();
        this.propTypes = {
            value: PropTypes.number.isRequired,
            onLogin: PropTypes.func.isRequired,
            onLogout: PropTypes.func.isRequired
        }
    }
    componentWillMount() {
        var cookie = getCookie('test');
        var loginCookie = getCookie('test_login');

        if (cookie !== undefined && loginCookie !== undefined) {
            appActions.login(cookie, loginCookie);
        }
    }
    render() {
        const { value, onLogin, onLogout } = this.props
        return (
            <div>
                <p>User is logged-{value?'in':'out'}</p>
                <form>
                    <button onClick={onLogin} />
                </form>
            </div>
        );
    }
}

export default Login
