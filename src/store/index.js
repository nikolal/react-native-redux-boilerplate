import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'

const configureStore = (initialState) => (
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  )
)

const store = configureStore()

export default store
