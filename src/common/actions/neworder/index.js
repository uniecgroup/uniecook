import Types from '../types'
//import DataStore from '../../expand/dao/DataStore'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onRefreshNeworder(storeName, url, requestData) {
    return dispatch => {
        dispatch({type: Types.NEWORDER_REFRESH, storeName: storeName});
        let dataStore = new DataStoreNoCache();

        let requestData = {
            delivery_date_start: '',
            cooking_status: '0'
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
        .then(data=>{
            handleData(dispatch, storeName, data)
        })
        .catch(error=>{
            console.log(error);
            dispatch({
                type: Types.NEWORDER_REFRESH_FAIL, 
                storeName,
                error
            });
        })
    }
}

function handleData(dispatch, storeName, data) {
    let fixItems=[];
    if(data&&data.orders){
        fixItems = data.orders;
    }
    dispatch({
        type: Types.NEWORDER_REFRESH_SUCCESS,
        items: fixItems,
        storeName,
    })
}