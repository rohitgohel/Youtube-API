import React, { Component } from "react";
import axios from "../api/axios";
import Search from "./Search";
import Videolist from "./videolist";

export default class App extends Component {
  state = { video: [] };
 

  onSearchSubmit = async term => {
    axios 
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: { 
        q: term,
        part: 'snippet', 
        maxResults: 10 ,
        key: "AIzaSyAbfaWcknZXmmSyFaJs74LInnm3H6MhbV0"
      },
    })
    .then(response => {
      console.log(response);
      this.setState({video:response.data.items});
    })
    .catch(error => {
      console.log (error);
    });
  };

  render() {  
    return (
      <div style={{ marginTop: "10px"  }} className="ui container ">
      
        <Search onSearchSubmit={this.onSearchSubmit} />
        <Videolist video={this.state.video} />
      </div>
    );
  }
}
