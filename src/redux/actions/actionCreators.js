import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, EDIT_SERVICE, CLEAR_SERVICE, FIND_SERVICE, CHANGE_SEARCH_FIELD} from './actionTypes';
export function addService(name, price) {
return {type: ADD_SERVICE, payload: {name, price}};
}
export function removeService(id) {
return {type: REMOVE_SERVICE, payload: {id}};
}
export function changeServiceField(fieldName, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {fieldName, value}};
}
export function editService(id, name, price) {
  return {type: EDIT_SERVICE, payload: {id, name, price}}
}
export function clearService() {
  return {type: CLEAR_SERVICE, payload: {}}
}
export function findService(searchValue) {
  return {type: FIND_SERVICE, payload: {searchValue}}
}
export function changeSearchField(value){
  return {type: CHANGE_SEARCH_FIELD, payload: {value}}
}