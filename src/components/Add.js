import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, clearService, removeService} from '../redux/actions/actionCreators'

export default function Add() {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const {name, value} = evt.target;
    dispatch(changeServiceField(name, value))
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price))
  }
  const handleCancel = evt => {
    evt.preventDefault();
    dispatch(clearService())
  }
  const handleSubmitEdit = evt => {
    evt.preventDefault();
    console.log(item)
    dispatch(removeService(item.id)); 
    dispatch(addService(item.name, item.price))
  }
  return (
    <div className='form'>
      {console.log(item.isEdited)}
        <form onSubmit={item.isEdited ? handleSubmitEdit: handleSubmit}>
        <div className='form-field'>
          <input name="price" onChange={handleChange} value={item.price} placeholder='Цена'></input>
        </div>
        <div className='form-field'>
          <input name="name" onChange={handleChange} value={item.name} placeholder='Название услуги'></input>
        </div>
        <div className='form-button'>
          <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></button>
        </div>
        {item.isEdited 
        ? <div className='form-button'>
          <button onClick={handleCancel}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></button>
        </div>
        :  ''}
      </form>
    </div>
  )
}

