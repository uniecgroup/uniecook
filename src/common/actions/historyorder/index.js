import Types from '../types'
import DataStoreNoCache from '../../expand/dao/DataStoreNoCache'

export function onRefreshHistoryOrder(storeName, url, timeSpan) {
    return dispatch => {
        dispatch({ type: Types.HISTORYORDER_REFRESH, storeName: storeName });
        let dataStore = new DataStoreNoCache();

        let requestData = {
            period: timeSpan.period,
            page_num: 1
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
        pageIndex: 1,
    })
}

/**
 * 加载更多
 * @param {*} storeName 
 * @param {*} pageIndex 第几页
 * @param {*} dataArray 原始数据
 * @param {*} callBAck 回调函数，可以通过回调函数来向调用页面通信： 比如异常信息的显示，没有更多等
 **/
export function onLoadMoreHistoryOrder(storeName, url, timeSpan, pageIndex, dataArray = [], callBAck) {
    return dispatch => {
        dispatch({ type: Types.HISTORYORDER_LOAD_MORE, storeName: storeName });

        setTimeout(() => {
            let dataStore = new DataStoreNoCache();

            let requestData = {
                period: timeSpan.period,
                page_num: pageIndex
            };

            dataStore.fetchDataPost(url, requestData)    //异步action与数据流
                .then(data => {
                    handleLoadMoreHistoryOrderData(dispatch, storeName, pageIndex, dataArray, data, (error) => {
                        callBAck(error)
                    })
                })
                .catch(error => {
                    if (typeof callBAck === 'function') {
                        callBAck(error)
                    }
                    dispatch({
                        type: Types.HISTORYORDER_LOAD_MORE_FAIL,
                        storeName,
                        error,
                        pageIndex: --pageIndex,
                    });
                })
        }, 800);
    }
}

function handleLoadMoreHistoryOrderData(dispatch, storeName, pageIndex, dataArray, data, callBAck) {
    let fixItems = dataArray;
    if (data && data.orders && !data.orders.length) {
        if (typeof callBAck === 'function') {
            callBAck('no more.')
        }
        dispatch({
            type: Types.HISTORYORDER_LOAD_MORE_FAIL,
            error: 'no more',
            storeName: storeName,
            pageIndex: --pageIndex,
        })
    } else {
        data.orders.map((order, index, orders) => {
            fixItems.push(order);
        });

        //fixItems.push(data.orders);

        dispatch({
            type: Types.HISTORYORDER_LOAD_MORE_SUCCESS,
            items: fixItems,
            storeName,
            pageIndex,
        })
    }
}