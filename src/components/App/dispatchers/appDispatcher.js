import APP from '../../../components/App/constants'
import { APP.LOGIN, APP.LOGOUT, APP.LOGIN_ASYNC } from '../actions'

export default (state = 0, action) => {
    switch (action.type) {
        case APP.LOGIN:
            return
        case APP.LOGOUT:
            return
        case APP.LOGIN_ASYNC:
            return
        default:
            return state
    }
}
