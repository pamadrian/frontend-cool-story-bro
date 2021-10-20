import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSpaces } from "../../store/spaces/actions";
import { selectAllSpaces } from "../../store/spaces/selectors";
import "./spaces.css";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Spaces() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectAllSpaces);
  console.log("selector?", spaces);

  useEffect(() => {
    dispatch(fetchAllSpaces);
  }, []);

  return (
    <Container>
      <div>
        {spaces.map((space) => (
          <div
            className="box"
            style={{ backgroundColor: space.backgroundColor }}
          >
            <div className="h2">
              <h2> {space.title} </h2>
            </div>
            <div className="p">
              <p> {space.description} </p>
            </div>
            <br />
            <br />
            <Link to={`/spaces/${space.id}`}>
              <button class="button-74" role="button">
                Visit Space
              </button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

// ### 2. Homepage (list of spaces).
// 0. Create GET - /spaces route in the backend.
// 1. Set up a useEffect to trigger my request.
// 2. Do a GET request to /spaces.
// 3. GEt the response and we log the list of spaces.
// 4. Set up a state and set the spaces to the state.
// 5. Map and render them.
