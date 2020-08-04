import {combineReducers} from 'redux';
import {requestsReducer} from 'redux-requests';
import recipes from './recipes';
import ui from './ui';

export default combineReducers({
  requests: requestsReducer,
  recipes,
  ui
});
