import React from "react";

export default function Child(props) {
  const { id, name, email, city } = props.person;
  return (
    <div className="perons-details">
      <ul>
        <li>
          <label>Id:</label> {id}
        </li>
        <li>
          <label>Name:</label> {name}
        </li>
        <li>
          <label>Email:</label> {email}
        </li>
        <li>
          <label>City:</label> {city}
        </li>
      </ul>
    </div>
  );
}
