import ACTION_TYPES from '../types'
//import DataStore from '../../expand/dao/DataStore'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export default function onLogonSuccess(storeId, userName, userPassword, apiToken) {
    return dispatch => {
        dispatch({
            type: ACTION_TYPES.USER_OPERATOINS.LOGGED_ON,
            payload: {
                storeId,
                userName,
                userPassword,                
                apiToken: apiToken
            }
        })
    }
}
