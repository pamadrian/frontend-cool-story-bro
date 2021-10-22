import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { postStory } from "../../store/user/actions";
import { selectAllSpaces } from "../../store/spaces/selectors";

import { Col } from "react-bootstrap";

export default function MyStoryForm() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://source.unsplash.com/1600x900/?"
  );
  const space = useSelector(selectAllSpaces);

  function submitStoryForm(event) {
    console.log("hi", submitStoryForm);
    event.preventDefault();

    dispatch(postStory(content, name, imageUrl));
    console.log("poststory??", postStory);
    setContent("");
    setName("");
    setImageUrl("");
  }
  return (
    <div className="box" style={{ backgroundColor: space.backgroundColor }}>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Post a cool story bro</h1>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="name"
            placeholder="Enter the name of your story"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={content}
            onChange={(event) => setContent(event.target.value)}
            type="content"
            placeholder="write your content"
            required
          />
        </Form.Group>{" "}
        <Form.Group>
          <Form.Label>Image url</Form.Label>
          <Form.Control
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            type="text"
            placeholder="A picture says more than 1000 words"
          />
          {imageUrl ? (
            <Col className="mt-4" md={{ span: 8, offset: 2 }}>
              <Image src={imageUrl} alt="preview" thumbnail />
            </Col>
          ) : null}
        </Form.Group>
        <Form.Group className="mt-5">
          <button className="button-74" role="button" onClick={submitStoryForm}>
            Post your cool story bro
          </button>
        </Form.Group>
      </Form>
    </div>
  );
}
