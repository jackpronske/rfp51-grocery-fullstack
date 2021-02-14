import React from 'react';

const GroceryForm = (props) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.addItemHandler(e.target[0].value)
    }
    }>
      <input type="text" name="item"></input>
      <input type="submit" value="add item"></input>
    </form>
  )
}


export default GroceryForm;