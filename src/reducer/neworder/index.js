import Types from '../../common/actions/types';

defaultState = {};

/**
 * neworder: {
 *      items:[],
 *      isLoading:false,
 *      playPropmtMusic: false,
 * }
 * @param state 
 * @param action 
 */
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.NEWORDER_REFRESH_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    items: action.items,//原始数据
                    isLoading: false,
                    playPromptMusic: action.playPromptMusic,
                }
            };
        case Types.NEWORDER_REFRESH:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: true,
                    playPromptMusic: false,
                }
            };
        case Types.NEWORDER_REFRESH_FAIL:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                    playPromptMusic: false,
                }
            };
        case Types.NEWORDERDETAIL_LOAD_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    item: action.item,
                    isLoading: false,
                }
            };
        case Types.NEWORDERDETAIL_LOAD:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: true,
                }
            };
        case Types.NEWORDERDETAIL_LOAD_FAIL:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    isLoading: false,
                }
            };            
        default:
            return state;
    }
}