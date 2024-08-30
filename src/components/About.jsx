import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About component</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;

/* 
 notes of code
 first parent class constructor
 render of parent

   first child class constructor
   render of child

   second child class constructor
   render of child

   first child mounated
   second child mounted
 parent child mounted
*/
