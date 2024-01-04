import {ADD_SERVICE} from '../actions/actionTypes';
import {REMOVE_SERVICE} from '../actions/actionTypes';
import { v4 as uuid } from 'uuid';

const defaultState = [
    {id: uuid(), name: 'Замена стекла', price: 21000},
    {id: uuid(), name: 'Замена стекла', price: 21000},
    {id: uuid(), name: 'Замена стекла', price: 21000}
  ]

export default function serviceListReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const {name, price} = action.payload;
      return [...state, {id: uuid(), name, price: Number(price)}];
    case REMOVE_SERVICE:
      const id = action.payload.id;
      return state.filter(service => service.id !== id);
    default:
      return state;
  }
}