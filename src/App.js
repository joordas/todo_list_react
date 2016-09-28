import React from 'react';
import './App.css';


var App = React.createClass({

  getInitialState: function(){
    return{
      items : []
    }
  },
  addItem: function(e){

    let itemArray = this.state.items;
      itemArray.push(
      {
        text: this._inputElement.value,
        key: Date.now()
      }
      
    );

    this.setState({
      items: itemArray
    });
    this._inputElement.value = "";
    
    
    e.preventDefault();
  },
  render: function(){
	return(

     <div className="todoListMain">
        <h1> React Todo-List: </h1>

          <div className="header">
            <form onSubmit={this.addItem}>
              <input required="true" ref={(a) => this._inputElement = a} placeholder="enter task"></input>
              <button type="submit">add</button>
            </form>
          </div>
         <Tasks tasks={this.state.items}/>
        </div>
	)
  }
});

//Todo Items
const Tasks = React.createClass({
  render: function(){
    let todoTasks = this.props.tasks;

    function createTasks(item){
      return <li key={item.key}>{item.text}</li>
    }
    let listItems = todoTasks.map(createTasks);
    return(
      <ul className="todoList">
        {listItems}
        </ul>
    )
  }
});









export default App;
