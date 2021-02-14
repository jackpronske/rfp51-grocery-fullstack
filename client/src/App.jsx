import React from 'react';
import GroceryList from './GroceryList.jsx';
import GroceryForm from './GroceryForm.jsx';
import $ from 'jquery';

// const App = () => {
//   return (
//     <div> HELLO! </div>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceryListItems: [
        {groceryName: 'TEST', quantity: '1000'},
        {groceryName: 'TESTTWO', quantity: '1'}
      ]
    }

    this.addItemHandler = this.addItemHandler.bind(this);

  }

  componentDidMount() {
    //here we'll have a ajaz get request to the localhost:8080 url
    //on success, we're going to set the state to equal the information retreived by the servers query to the db
    $.ajax('http://localhost:8080/groceryList', {
      type: "GET",
      success: (data) => {
        this.setState({
          groceryListItems: data
        })
      }
    })
  }

  addItemHandler(item) {
    console.log(item);
    let dataObject = {
      groceryName: item,
      quantity: 1
    };
    console.log(dataObject);

    //post request here!
    $.ajax('http://localhost:8080/groceryList', {
      type: "POST",
      data: dataObject,
      success: () => {

      }
    })
  }

  render() {
    return (
      <div>
        <GroceryForm addItemHandler={this.addItemHandler}/>
        <GroceryList groceryListItems={this.state.groceryListItems}/>
      </div>
    )
  }
}

export default App;