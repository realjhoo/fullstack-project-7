import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Image from "./Image";
import NoResults from "./NoResults";

class ImageUL extends Component {
  render() {
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
      images = <NoResults />;
    }

    return (
      <div className="photo-container">
        {this.props.loading ? (
          <h2>Loading...</h2>
        ) : (
          <Fragment>
            <h2>Results</h2>
            <ul>{images}</ul>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(ImageUL);
