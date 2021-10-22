import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Loading from "../../components/Loading";
import MyStoryForm from "../../components/MyStoryForm";
import { deleteStory } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";

import "./mySpace.css";

export default function MySpace() {
  const dispatch = useDispatch();
  const { token, space, id } = useSelector(selectUser);
  const [postStoryMode, setpostStoryMode] = useState(false);
  const user = useSelector(selectUser);
  const history = useHistory();

  // console.log("USER???", user);
  // DELETE STORY
  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

  if (!user.space) return <h1>Loading...</h1>;

  // Post a story!

  if (token === null) {
    history.push("/");
  }

  if (space === null) {
    return <Loading />;
  }
  const displayButtons =
    // id === space.userId && editMode === false && postStoryMode === false;
    id === space.userId && postStoryMode === false;

  // console.log("user dot space???", user.space);

  return (
    <div>
      <div>
        <h1> MY HAPPY SPACE </h1>
        <h1>{user.space.title}</h1>
        <h2>{user.space.description}</h2>
      </div>
      <div>
        <h1>STORIES</h1>
        {user.space.stories.map((story) => (
          <div
            key={story.id}
            className="box"
            style={{ backgroundColor: user.space.backgroundColor }}
          >
            <h3 className="h3">{story.content}</h3>
            <p className="p">{story.name}</p>
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
            <button
              className="button-74"
              role="button"
              variant="danger"
              onClick={() => onDelete(story.id)}
            >
              Delete story
            </button>
          </div>
        ))}
        <div>
          <div>
            {displayButtons ? (
              // <Card>
              <button
                className="button-74"
                role="button"
                onClick={() => setpostStoryMode(true)}
              >
                Post a cool story bro
              </button>
            ) : // </Card>
            null}

            {postStoryMode ? (
              <Card>
                <MyStoryForm />
              </Card>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
