import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showAllSpaces } from "../actions/spaceActions";
import { Typography } from "@material-ui/core";

const Homepage = () => {
  const dispatch = useDispatch();
  const spaces = useSelector((state) => state.spaces);
  useEffect(() => {
    dispatch(showAllSpaces());
  }, [dispatch]);
  console.log("ssp", spaces);

  if (!spaces) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <Typography
          variant="h4"
          style={{
            color: "black",
            fontWeight: "2px",
            fontFamily: "IBM Plex Serif,serif",
          }}
        >
          SPACES
        </Typography>
        {spaces.map((space, index) => (
          <div key={index} className="container">
            <div className="row">
              <div className="col">
                {" "}
                <img
                  src={space.url}
                  alt="Not loading"
                  style={{
                    filter: "sepia(100%)",
                  }}
                />
              </div>
            </div>

            <Typography>
              <Link to={`/spaces/${space.id}`}>{space.name}</Link>
            </Typography>
          </div>
        ))}{" "}
      </div>
    );
  }
};

export default Homepage;
