import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Singlepost() {
  const { id } = useParams();

  const url = `https://schoolsitedemo.herokuapp.com/eventsblogs/${id}`;
  const [singlePost, setPost] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, [url]);

  if (singlePost) {
    return (content = (
      <div>
        <h1>{singlePost.title}</h1>
        Thumbnail: <img src={singlePost.thumbnailimg.url} alt="img" />
            <p>content: {singlePost.content}</p>
      </div>
    ));
  }

  return <div>{content}</div>;
}

export default Singlepost;
