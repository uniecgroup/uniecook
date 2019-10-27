import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onLoadOrderDetail(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.NEWORDERDETAIL_LOAD, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleNewOrderDetailData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.NEWORDERDETAIL_LOAD_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleNewOrderDetailData(dispatch, storeName, data) {
    let fixItem = [];
    if (data && data.order) {
        fixItem = data.order;
    }

    dispatch({
        type: Types.NEWORDERDETAIL_LOAD_SUCCESS,
        item: fixItem,
        storeName,
    })
}

export function onChangeOrderToCooking(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.CHANGENEWORDER_TO_COOKING, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleChangeOrderToCookingData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.CHANGENEWORDER_TO_COOKING_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleChangeOrderToCookingData(dispatch, storeName, data) {
    if (data && data.error) {
        dispatch({
            type: Types.CHANGENEWORDER_TO_COOKING_FAIL,
            storeName,
            error
        });
    }

    dispatch({
        type: Types.CHANGENEWORDER_TO_COOKING_SUCCESS,
        storeName,
    })
}

export function onChangeOrderToCancel(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.CHANGENEWORDER_TO_CANCEL, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleChangeOrderToCancelData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.CHANGENEWORDER_TO_CANCEL_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleChangeOrderToCancelData(dispatch, storeName, data) {
    if (data && data.error) {
        dispatch({
            type: Types.CHANGENEWORDER_TO_CANCEL_FAIL,
            storeName,
            error
        });
    }

    dispatch({
        type: Types.CHANGENEWORDER_TO_CANCEL_SUCCESS,
        storeName,
    })
}