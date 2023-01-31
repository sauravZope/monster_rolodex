import "./App.css";
import React, { Component } from "react";
import { CardList } from "./Component/Card-List/Card-list";
import { Searchbox } from "./Component/search-box/searchbox";

class App extends Component {
  constructor() {
    super();
    //call constructor fn on component class

    this.state = {
      monsters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
        
//   Why do we need bind?
// bind(something) returns a new function, in which references to this will refer to something . This is a way of saving the current value of this , which is in scope during the call to the constructor, so that it can be used later when the function is called.




// Why do we need to bind event handlers in React?
// Binding event handlers to this is not just ReactJS-specific, it is a Javascript-specific concept because, in JS, the value of this in simple functions (non-arrow functions) is undefined by default (in strict mode), that is why there is a need to bind event handlers to this to access its properties within the handler ..

  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonster=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
      )
    
    //pulling off monster and searchfield from the this.state and setting them const
    // monsters and searchfield
    //  |
    //  |
    //  |
    //  |
    // below line are simliar interpretation of what we did in the above line
    // but the always want short code that way doing this
    // const monster=this.state.monsters;
    // const searchfield=this.state.monsters
    return (
      <div className="App">
     <h1>Monsters Rolodex</h1>   
        <Searchbox
        placeholder={'search monsters'}
        handleChange={  event => this.setState({ searchfield: event.target.value })}/>
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
