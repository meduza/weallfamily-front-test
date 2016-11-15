import React, { Component, PropTypes } from 'react';
import getCookie from '../../helpers/getCookie.js';
import USER from '../../components/Login/constants'

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
        const { value, onLogin, onLogout } = this.props
        let username
        let password
        return (
            <div>
                <p>User is logged-{ value.uid && value.login ? 'in' : 'out' }</p>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!username.trim() || !password.trim()) {
                            return
                        }
                        dispatch(onLogin(username, password))
                    }}
                >
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

                    <button>Log-in</button>
                    <button
                        onClick={e => {
                            dispatch(onLogout())
                        }}
                    >Log-out</button>
                </form>
            </div>
        );
    }
}

export default Login
