import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onLoadInProgressOrderDetail(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.INPROGRESSORDERDETAIL_LOAD, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleInProgressOrderDetailData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.INPROGRESSORDERDETAIL_LOAD_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleInProgressOrderDetailData(dispatch, storeName, data) {
    let fixItem = [];
    if (data && data.order) {
        fixItem = data.order;
    }

    dispatch({
        type: Types.INPROGRESSORDERDETAIL_LOAD_SUCCESS,
        item: fixItem,
        storeName,
    })
}

export function onChangeOrderToCookDone(storeName, url, order_id) {
    return dispatch => {
        dispatch({ type: Types.CHANGEORDER_TO_COOKDONE, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            order_id: order_id
        };

        dataStore.fetchDataPost(url, requestData)    //异步action与数据流
            .then(data => {
                handleChangeOrderToCookDoneData(dispatch, storeName, data)
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: Types.CHANGEORDER_TO_COOKDONE_FAIL,
                    storeName,
                    error
                });
            })
    }
}

function handleChangeOrderToCookDoneData(dispatch, storeName, data) {
    if (data && data.error) {
        dispatch({
            type: Types.CHANGEORDER_TO_COOKDONE_FAIL,
            storeName,
            error
        });
    }

    dispatch({
        type: Types.CHANGEORDER_TO_COOKDONE_SUCCESS,
        storeName,
    })
}