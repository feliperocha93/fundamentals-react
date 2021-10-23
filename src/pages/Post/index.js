import React, { useMemo } from "react";
import { useParams, useLocation } from "react-router";

export default function Post() {
  // Returns an object with path params (keys are defined in route path)
  const params = useParams();

  // Returns the string starting with '?'
  const { search } = useLocation();
  // Returns a class with methods to manipulate query params. useMemo for when
  // needs re-render, just to recalculate the value if search string has changed
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  return (
    <>
      <h1>Post</h1>
    </>
  );
};
