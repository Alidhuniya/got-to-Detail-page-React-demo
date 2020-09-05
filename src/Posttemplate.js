import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Posttemplate(props) {
  return (
    <Fragment>
      <div>
        <Link to={`/eventsblogs/${props.post.id}`}>
          <div className="image">
          <h1> Heading: {props.post.title}</h1>
            Thumbnail: <img src={props.post.thumbnailimg.url} alt="img" />
            <p>Description: {props.post.description}</p>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Posttemplate;
