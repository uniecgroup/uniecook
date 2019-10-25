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
            };
        case Types.HISTORYORDER_REFRESH:
            return {
                ...state,
                isLoading: true,
            };
        case Types.HISTORYORDER_REFRESH_FAIL:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}