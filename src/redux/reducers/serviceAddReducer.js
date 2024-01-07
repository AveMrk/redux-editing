import {CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLEAR_SERVICE} from '../actions/actionTypes'

const initialState = { 
  id: '', name: '', price: '', isEdited: false
};
export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {fieldName, value} = action.payload;
      return {...state, [fieldName]: value};
    case EDIT_SERVICE:
      const {id, name, price} = action.payload;
      return {id, name, price, isEdited: true};
    case CLEAR_SERVICE:
      return initialState;
    default:
      return state;
    }
}
