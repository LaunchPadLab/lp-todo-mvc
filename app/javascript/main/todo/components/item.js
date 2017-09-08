import React from 'react';

function TodoItem({
  item,
  editItem,
  destroyItem,
  handleSubmit
 }) {
  return (
    <li className="">
      <div className="view">
        <input className="toggle" type="checkbox" checked={ item.completed }/>
        <label onDoubleClick={ () => editItem() }>{ item.text }</label>
        <button className="destroy" onClick={ () => { destroyItem() } }></button>
      </div>
      <input ref="editField" className="edit" value={ item.text }
        onBlur={ () => handleSubmit() } />
    </li>
  )
}

export default TodoItem
