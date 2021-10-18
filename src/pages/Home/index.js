import axios from "axios";
import { useState, useEffect } from "react";

export default function HomePage(props) {
  const [spaces, setSpaces] = useState([{}]);
  console.log("a render!");

  useEffect(() => {
    async function doSomeDataFetching() {
      console.log("the useEffect action!");

      const response = await axios.get(`http://localhost:4000/spaces`);
      console.log("got back response", response.data);
      setSpaces(response.data);
    }

    doSomeDataFetching();
  }, []);

  return (
    <div>
      <h1> All Spaces</h1>
      <ul>
        {spaces.map((props) => (
          <div>
            {" "}
            key= {props.id}
            Title={props.title}
            description={props.description}
          </div>
        ))}
      </ul>
    </div>
  );
}

// ### 2. Homepage (list of spaces).
// 0. Create GET - /spaces route in the backend.
// 1. Set up a useEffect to trigger my request.
// 2. Do a GET request to /spaces.
// 3. GEt the response and we log the list of spaces.
// 4. Set up a state and set the spaces to the state.
// 5. Map and render them.
