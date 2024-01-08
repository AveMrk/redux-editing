import {ADD_SERVICE} from '../actions/actionTypes';
import {REMOVE_SERVICE} from '../actions/actionTypes';
import {FIND_SERVICE} from '../actions/actionTypes';
import { v4 as uuid } from 'uuid';

const defaultState = [
    {id: uuid(), name: 'Замена дисплея', price: 2500},
    {id: uuid(), name: 'Замена стекла', price: 2100},
    {id: uuid(), name: 'Замена аккумулятора', price: 4000},
    {id: uuid(), name: 'Замена микрофона', price: 2500}
  ]

export default function serviceListReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: uuid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const id = action.payload.id;
      return state.filter(service => service.id !== id);
    case FIND_SERVICE:
      const {searchValue} = action.payload;
      return state.filter(service => service.name.includes(searchValue))
    default:
      return state;
  }
}