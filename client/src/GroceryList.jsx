import React from 'react';

const GroceryList = (props) => {
  return (
    <div>
      {props.groceryListItems.map(item => {
        return (
          <div key={item.groceryName}>
            {item.groceryName} : {item.quantity}
          </div>
        )
      })}
    </div>
  )
}

export default GroceryList;