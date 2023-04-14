import React from "react";
import Child from "./Child";

const personDetails = {
  id: 1,
  name: "Saurabh Sharma",
  email: "saurabh@gmail.com",
  city: "Mumbai",
};
export default function Parent() {
  return <Child person={personDetails} />;
}
