import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import getCookie from '../../helpers/getCookie.js';
import USER from '../../components/Login/constants'

let username
let password

class Login extends Component {
    static get propTypes() {
        return {
            value: PropTypes.object.isRequired,
            onLogin: PropTypes.func.isRequired,
            onLogout: PropTypes.func.isRequired
        }
    }
    componentWillMount() {
        var cookie = getCookie('test');
        var loginCookie = getCookie('test_login');

        if (cookie !== undefined && loginCookie !== undefined) {
            this.props.value = {uid: cookie, login: loginCookie};
        }
    }
    render() {
        let login = (e) => {
            e.preventDefault();
            if (!username.trim() || !password.trim()) {
                return
            }
            dispatch(onLogin(username, password))
        }
        let logout = (e) => {
            e.preventDefault();
            dispatch(onLogout())
        }
        const { value, onLogin, onLogout } = this.props
        return (
            <div>
                <p>User is logged-{ value.uid && value.login ? 'in' : 'out' }</p>
                <form onSubmit={ login } >
                    <div>
                        <label htmlFor="username">Login</label>
                        <input
                            name="username"
                            type="text"
                            ref={node => {
                                username = node.value
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            type="password"
                            ref={node => {
                                password = node.value
                            }}
                        />
                    </div>

                    <input type="submit" value="Log-in" onClick={ login } />
                    <button onClick={ logout } >Log-out</button>
                </form>
            </div>
        );
    }
}

export default connect()(Login)
