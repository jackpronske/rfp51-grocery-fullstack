import React from 'react';

const GroceryForm = (props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.addItemHandler()
    }
    }>
      <input type="text"></input>
      <input type="submit" value="add item"></input>
    </form>
  )
}


export default GroceryForm;