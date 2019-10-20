import { createStore, combineReducers } from "redux";
import userReducer from "./reducers/UserReducer";

const initialState = {
  user: {
      userLoggedOn : true,
      userName: 'What!',
      userPassword: '123456',
      apiToken: 'asdf34fdlfasdfhlk5242lk24j2j234lkjasdfsahj55'
  }
}


const rootReducer = combineReducers({
  user: userReducer
});

const AppStore = () => {
  return createStore(rootReducer);
};

export default AppStore;