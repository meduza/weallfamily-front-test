import User from '../types/User'
import USER from '../constants/USER'
import APP from '../constants/APP'

export default (state = 0, action) => {
    switch (action.type) {
        case USER.LOGIN:
            return 1;
        case USER.LOGOUT:
            document.cookie = 'test=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            document.cookie = 'test_login=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
            return 0;
        default:
            return state
    }
}
