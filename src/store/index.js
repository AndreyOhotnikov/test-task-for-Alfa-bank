import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cardReducer } from './cardsReducer';

const rootReducer = combineReducers({
  cards: cardReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
