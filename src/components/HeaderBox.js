import React, { Component } from "react";
import './HeaderBox.css';

class HeaderBox extends Component {

  render(){
    return <h2 className="header-box">{this.props.title}</h2>
  }
}
export default HeaderBox;
