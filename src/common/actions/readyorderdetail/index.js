import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onLoadReadyOrderDetail(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.READYORDERDETAIL_LOAD, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleReadyOrderDetailData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.READYORDERDETAIL_LOAD_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleReadyOrderDetailData(dispatch, storeName, data) {
    let fixItem = [];
    if (data && data.order) {
        fixItem = data.order;
    }

    dispatch({
        type: Types.READYORDERDETAIL_LOAD_SUCCESS,
        item: fixItem,
        storeName,
    })
}

export function onChangeOrderToDelivering(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.CHANGEORDER_TO_DELIVERYING, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleChangeOrderToDeliveryingData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.CHANGEORDER_TO_DELIVERYING_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleChangeOrderToDeliveryingData(dispatch, storeName, data) {
    if (data && data.error) {
        dispatch({
            type: Types.CHANGEORDER_TO_DELIVERYING_FAIL,
            storeName,
            error
        });
    }

    dispatch({
        type: Types.CHANGEORDER_TO_DELIVERYING_SUCCESS,
        storeName,
    })
}
