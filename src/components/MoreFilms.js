import React, { Component } from "react";

class MoreFilms extends Component{

  render(){
    return(
     <h2 className="more-films">{this.props.title}</h2>
    );
  }
}
export default MoreFilms;
