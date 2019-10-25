import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onLoadHistoryOrderDetail(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.HISTORYORDERDETAIL_LOAD, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleHistoryOrderDetailData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.HISTORYORDERDETAIL_LOAD_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleHistoryOrderDetailData(dispatch, storeName, data) {
    let fixItem = [];
    if (data && data.order) {
        fixItem = data.order;
    }

    dispatch({
        type: Types.HISTORYORDERDETAIL_LOAD_SUCCESS,
        item: fixItem,
        storeName,
    })
}

