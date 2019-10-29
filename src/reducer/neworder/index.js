import Types from '../../common/actions/types';

defaultState = {};

/**
 *      neworder: {
 *          items:[],
 *          isLoading:false,
 *          playPropmtMusic: false,
 *      }
 * @param state 
 * @param action 
 */
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.NEWORDER_REFRESH_SUCCESS:
            return {
                ...state,
                items: action.items,//原始数据
                isLoading: false,
                playPromptMusic: action.playPromptMusic,
            };
        case Types.NEWORDER_REFRESH:
            return {
                ...state,
                items: [],
                isLoading: true,
                playPromptMusic: false,
            };
        case Types.NEWORDER_REFRESH_FAIL:
            return {
                ...state,
                isLoading: false,
                playPromptMusic: false,
            };
        default:
            return state;
    }
}