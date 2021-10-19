import { selectAllSpaces } from "../../store/spaces/selectors";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchAllSpaces } from "../../store/spaces/actions";

export default function DetailPage() {
  console.log("detailspage??");

  const spacesDetails = useSelector(selectAllSpaces);
  console.log("Spaces?", spacesDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSpaces);
  }, []);

  return (
    <div>
      <h1>Hi detailspage</h1>
      {spacesDetails.map((space) => (
        <div>
          <h1> {space.title} </h1>
          <p> {space.description} </p>
        </div>
      ))}
    </div>
  );
}
