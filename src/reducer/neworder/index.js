import Types from '../../common/actions/types';

defaultState = {};

/**
 * popular: {
 *      java:{
 *          items:[],
 *          isLoading:false
 *      },
 *      iso:{
 *          items:[],
 *          isLoading:false
 *      }
 * }
 * @param state 
 * @param action 
 */
export default function onAction(state=defaultState, action) {
    switch(action.type) {
        case Types.NEWORDER_REFRESH_SUCCESS:
            return {
                ...state,
                [action.storeName]: {
                    ...state[action.storeName],
                    items: action.items,//原始数据
                    isLoading: false,
                }
            };
        case Types.NEWORDER_REFRESH :
                return {
                    ...state,
                    [action.storeName]: {
                        ...state[action.storeName],
                        isLoading: true,
                    }
                };
        case Types.NEWORDER_REFRESH_FAIL :
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