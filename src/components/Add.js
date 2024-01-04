import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../redux/actions/actionCreators'

export default function Add() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value))
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(item.name)
    dispatch(addService(item.name, item.price))
  }
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <input name="price" onChange={handleChange} value={item.price} placeholder='Цена'></input>
        </div>
        <div className='form-field'>
          <input name="name" onChange={handleChange} value={item.name} placeholder='Название услуги'></input>
        </div>
        <div className='form-button'>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  )
}

