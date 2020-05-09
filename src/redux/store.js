import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { dogsReducer } from '../redux/reducers';

const reducers = combineReducers({
    dogsReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

