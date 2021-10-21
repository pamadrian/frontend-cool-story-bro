import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../store/user/selectors";
import "./mySpace.css";

export default function MySpace() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  console.log("USER???", user);

  if (!user.space) return <h1>Loading...</h1>;

  console.log("user dot space???", user.space);

  return (
    <div style={{ backgroundColor: user.space.backgroundColor }}>
      <div>
        <h1> MY HAPPY SPACE </h1>
        <h1>{user.space.title}</h1>
        <h2>{user.space.description}</h2>
      </div>
    </div>
  );
}
