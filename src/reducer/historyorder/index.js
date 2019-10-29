import Types from '../../common/actions/types';

defaultState = {};

/**
 *      historyorder: {
 *          items:[],
 *          isLoading:false,
 *      }
 * @param state 
 * @param action 
 */
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.HISTORYORDER_REFRESH_SUCCESS:
            return {
                ...state,
                items: action.items,//原始数据
                isLoading: false,
                pageIndex: action.pageIndex
            };
        case Types.HISTORYORDER_REFRESH:
            return {
                ...state,
                items: action.items,
                isLoading: true,
                hideLoadingMore: true,
            };
        case Types.HISTORYORDER_REFRESH_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        case Types.HISTORYORDER_LOAD_MORE_SUCCESS:
            return {
                ...state,
                items: action.items,
                hideLoadingMore: true,
                pageIndex: action.pageIndex,
            };
        case Types.HISTORYORDER_LOAD_MORE:
            return {
                ...state,
                hideLoadingMore: false,
                pageIndex: action.pageIndex,
            };
        case Types.HISTORYORDER_LOAD_MORE_FAIL:
            return {
                ...state,
                hideLoadingMore: true,
                pageIndex: action.pageIndex,
            };
        default:
            return state;
    }
}