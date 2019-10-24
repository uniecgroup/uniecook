import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onLoadOrderDetail(storeName, url, order_id) {
    return dispatch => {
        //dispatch({ type: Types.NEWORDERDETAIL_LOAD, storeName: storeName });
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

