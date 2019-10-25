import {combineReducers} from 'redux'
import user from './user'
import neworder from './neworder'
import neworderdetail from './neworderdetail'
import inprogressorder from './inprogressorder'
import inprogressorderdetail from './inprogressorderdetail'
import {rootCom, AppNavigator} from '../navigation/AppNavigation';

//1.指定默认navigator state
const navState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(rootCom))


//2. 创建自己的 navigation reducer
const navReducer = (state = navState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    // 如果 nextState 为 null或未定义，只需返回原始 state
    return nextState || state;
}

//3. 合并 reducer
const index = combineReducers({
    nav: navReducer,
    neworder: neworder,
    neworderdetail: neworderdetail,
    inprogressorder: inprogressorder,
    inprogressorderdetail: inprogressorderdetail,
    user: user,
});

export default index;
