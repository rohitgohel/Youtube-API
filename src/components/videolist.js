import React, { Component } from "react";

export default class Vidoelist extends Component {
  render() {
    return (
      <div>
        {this.props.video.map(video => {
          return (
            
            <iframe width= "1125" title="dkj" height= "500" allowFullScreen key={video.id} src={`https://www.youtube.com/embed/${video.id.videoId}`} />
          );
        })}
      </div>
    );
  }
}
