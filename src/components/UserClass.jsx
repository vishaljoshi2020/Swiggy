import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      userInfo: {},
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("ComponentDidMount");
    const response = await fetch("https://api.github.com/users/shri");
    const json = await response.json();

    // Update the state with the fetched data, assuming json contains the correct structure
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
      },
      count: this.state.count + 1,
    });
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }
  render() {
    const { name, location } = this.state.userInfo;
    console.log("render");
    return (
      <div className="user-card">
        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{this.state.count}</h2>
        <h2>contact : 123456789</h2>
      </div>
    );
  }
}

export default UserClass;
