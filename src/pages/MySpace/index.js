import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "react-bootstrap/Button";

import { deleteStory } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

import "./mySpace.css";

export default function MySpace() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  // console.log("USER???", user);
  // DELETE STORY
  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

  if (!user.space) return <h1>Loading...</h1>;

  // console.log("user dot space???", user.space);

  return (
    <div style={{ backgroundColor: user.space.backgroundColor }}>
      <div>
        <h1> MY HAPPY SPACE </h1>
        <h1>{user.space.title}</h1>
        <h2>{user.space.description}</h2>
      </div>
      <div>
        <h1>STORIES</h1>
        {user.space.stories.map((story) => (
          <div key={story.id}>
            <h3>{story.content}</h3>
            <p>{story.name}</p>
            <img
              alt={story.id}
              src={story.imageUrl}
              width="400"
              height="400"
            />{" "}
            <p className="meta">
              Date: {""}
              {moment(story.createdAt).format("DD-MM-YYYY")}{" "}
            </p>
            <Button variant="danger" onClick={() => onDelete(story.id)}>
              Delete story
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
