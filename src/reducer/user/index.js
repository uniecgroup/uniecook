import ACTION_TYPES from '../../common/actions/types';

const initialState = {
    userLoggedOn: true,
    userName: '',
    userPassword: '',
    apiToken: ''
}

export default function onAction(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.USER_OPERATIONS.NEW_NAME:
            return {
                ...state,
                userName: action.payload.userName
            };
            break;
        case ACTION_TYPES.USER_OPERATIONS.LOGGED_ON:
            return {
                ...state,
                userName: action.payload.userName,
                apiToken: action.payload.apiToken,
                userLoggedOn: true
            };
            break;
        case ACTION_TYPES.USER_OPERATIONS.LOGGED_OFF:
            return {
                ...state,
                userName: '',
                apiToken: '',
                userLoggedOn: false
            };
            break;
        default:
            return state;
    }
}
