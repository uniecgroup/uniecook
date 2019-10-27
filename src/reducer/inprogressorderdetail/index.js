import Types from '../../common/actions/types';

defaultState = {};

/**
 *       inprogressorderdetail: {
 *          item:[],
 *          isLoading:false,
 *          canLoadData: false,
 *      }
 * @param state 
 * @param action 
 */
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.INPROGRESSORDERDETAIL_LOAD_SUCCESS:
            return {
                ...state,
                item: action.item,
                isLoading: false,
                canLoadData: true,
            };
        case Types.INPROGRESSORDERDETAIL_LOAD:
            return {
                ...state,
                isLoading: true,
                canLoadData: false,
                isOrderStatusChanged: false,
            };
        case Types.INPROGRESSORDERDETAIL_LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                canLoadData: false,
            };
        case Types.CHANGEORDER_TO_COOKDONE_SUCCESS:
            return {
                ...state,
                isOrderStatusChanged: true,
            };
        case Types.CHANGEORDER_TO_COOKDONE:
            return {
                ...state,
                isOrderStatusChanged: false,
            };
        case Types.CHANGEORDER_TO_COOKDONE_FAIL:
            return {
                ...state,
                isOrderStatusChanged: false,
            };
        default:
            return state;
    }
}