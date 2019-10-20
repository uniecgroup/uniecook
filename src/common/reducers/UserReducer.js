import ACTION_TYPES from '../actions/types';

const initialState = {
    userLoggedOn: false,
    userName: 'John Smith',
    userPassword: '123456',
    apiToken: 'asdf34fdlfasdfhlk5242lk24j2j234lkjasdfsahj55'
}

export default UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.USER_OPERATOINS.NEW_NAME:
            return {
                ...state,
                userName: action.payload.userName
            }
            break
        default:
            return initialState
            break;
    }
}
