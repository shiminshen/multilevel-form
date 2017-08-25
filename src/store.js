import { createStore, combineReducers, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'

const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }

}

const composedEnhancers = compose(
  ...enhancers
)

const reducers = {
  form: formReducer
};

const reducer = combineReducers(reducers);
const store = createStore(reducer, composedEnhancers);

export default store
