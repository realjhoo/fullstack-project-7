import React, { Component } from "react";
import Image from "./Image";
import NoResults from "./NoResults";

class ImageUL extends Component {
  render(props) {
    let images = this.props.data;
    if (images.length > 0) {
      images = images.map(photo => {
        return (
          <Image
            key={photo.id}
            id={photo.id}
            farm={photo.farm}
            secret={photo.secret}
            server={photo.server}
            alt={photo.title}
          />
        );
      });
    } else {
      if (this.props.loading) {
        return <h2>Loading...</h2>;
      }
      return <NoResults />;
    }

    return (
      <div className="photo-container">
        <h2>Results</h2>
        <ul>{images}</ul>
      </div>
    );
  }
}

export default ImageUL;
