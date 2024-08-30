import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h2>{count}</h2>
      <h2>{name}</h2>
      <h2>location : banglore</h2>
      <h2>contact : 123456789</h2>
    </div>
  );
};

export default User;
