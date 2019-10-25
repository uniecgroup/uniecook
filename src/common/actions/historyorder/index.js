import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onRefreshHistoryOrder(storeName, url) {
    return dispatch => {
        dispatch({ type: Types.HISTORYORDER_REFRESH, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            period: '',
            page_num: ''
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleHistoryOrderData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.HISTORYORDER_REFRESH_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleHistoryOrderData(dispatch, storeName, data) {
    let fixItems = [];
    if (data && data.orders) {
        fixItems = data.orders;
    }

    dispatch({
        type: Types.HISTORYORDER_REFRESH_SUCCESS,
        items: fixItems,
        storeName,
    })
}