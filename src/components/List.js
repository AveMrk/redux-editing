import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeService } from '../redux/actions/actionCreators';
export default function List() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const handleRemove = id => {
    dispatch(removeService(id))
  }
  return (
    <div>
      <ul>
        {items.map(o => (
          <li key={o.id}>
            {o.name}&nbsp;{o.price}
            <button onClick={() => handleRemove(o.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
    
  )
}
