import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';
import serviceFilterReducer from '../reducers/serviceFilterReducer';
const reducer = combineReducers({
serviceList:
serviceListReducer,
serviceAdd:
serviceAddReducer,
serviceFilter:
serviceFilterReducer
});
const configureStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
export default configureStore;