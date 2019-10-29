import Types from '../../common/actions/types';

defaultState = {};

/**
 *      readyorder: {
 *          items:[],
 *          isLoading:false,
 *      }
 * @param state 
 * @param action 
 */
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.READYORDER_REFRESH_SUCCESS:
            return {
                ...state,
                items: action.items,//原始数据
                isLoading: false,
            };
        case Types.READYORDER_REFRESH:
            return {
                ...state,
                items: [],
                isLoading: true,
            };
        case Types.READYORDER_REFRESH_SUCCESS:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}