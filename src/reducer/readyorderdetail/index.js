import Types from '../../common/actions/types';

defaultState = {};

/**
 *       readyorderdetail: {
 *          item:[],
 *          isLoading:false,
 *          canLoadData: false,
 *      }
 * @param state 
 * @param action 
 */
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.READYORDERDETAIL_LOAD_SUCCESS:
            return {
                ...state,
                item: action.item,
                isLoading: false,
                canLoadData: true,
            };
        case Types.READYORDERDETAIL_LOAD:
            return {
                ...state,
                isLoading: true,
                canLoadData: false,
            };
        case Types.READYORDERDETAIL_LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                canLoadData: false,
            };            
        default:
            return state;
    }
}