import * as types from '../../actions/actionTypes.js'

export const updateHomeTextAction = (text) => ({
  type: types.UPDATE_HOME_TEXT,
  text,
})
