import React from "react";

const Image = props => {
  const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
  return (
    <li>
      <img src={url} alt={props.alt} />
    </li>
  );
};

export default Image;
