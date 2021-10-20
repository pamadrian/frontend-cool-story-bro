import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaceDetails } from "../../store/spaces/actions";
import { selectAllSpaceDetails } from "../../store/spaces/selectors";
import moment from "moment";
import "./detailPage.css";

export default function DetailPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;
  const spaceDetails = useSelector(selectAllSpaceDetails);
  console.log("selectordetails?", spaceDetails);

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  if (!spaceDetails) return <h1>Loading...</h1>;

  return (
    <div style={{ backgroundColor: spaceDetails.backgroundColor }}>
      <h1>{spaceDetails.title}</h1>
      <h2>{spaceDetails.description}</h2>
      <br />
      <br />
      <div>
        {spaceDetails.stories.map((story) => {
          return (
            <div key={story.id}>
              <h3>{story.content}</h3>
              <p>{story.name}</p>;
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
