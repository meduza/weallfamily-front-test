import React from 'react'
import Login from '../../../components/Login'
import { login, logout, loginAsync } from '../../../components/App/actions'

const App = () => {
    let input

    return (
        <div>
            <Login value={ {} } onLogin={ loginAsync } onLogout={ logout }/>
        </div>
    )
}

export default App
