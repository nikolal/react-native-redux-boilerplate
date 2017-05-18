import * as types from '../../actions/actionTypes'

const defaultState = {
  homeText: 'Initial text from home reducer',
}

const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_HOME_TEXT:
      return {
        ...state,
        homeText: action.text,
      }
    default: return state
  }
}

export default homeReducer
