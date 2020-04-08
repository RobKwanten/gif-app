import React from "react";

export default ({ data }) => (
  <>
    <h2>Results</h2>
      {data.map(gif => (
        <a href={gif.url} target="_blank">
          <img
            src={gif.media[0].gif.url}
            alt={gif.name}
            id={gif.id}
            className="item"
          />
        </a>
      ))}
  </>
);
