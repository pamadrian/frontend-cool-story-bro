import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchAllStories } from "../../store/stories/actions";
import { selectAllStories } from "../../store/stories/selectors";

export default function DetailPage() {
  const dispatch = useDispatch();
  const spaceDetails = useSelector(selectAllStories);
  console.log("selectorstories?", spaceDetails);

  useEffect(() => {
    dispatch(fetchAllStories);
  }, []);

  return (
    <div>
      <h1>Hi detailspage</h1>
    </div>
  );
}
