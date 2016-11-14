import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import USER from './constants/USER'
import Login from './directives/Login'
import userReducer from './reducers/userReducer'

const userStore = createStore(userReducer);

const render = () => ReactDOM.render(
    <div>
        <Login
            value={userStore.getState()}
            onLogin={() => userStore.dispatch({ type: USER.LOGIN })}
            onLogout={() => userStore.dispatch({ type: USER.LOGOUT })}
        />
    </div>,
    root
);

render()
userStore.subscribe(render)
