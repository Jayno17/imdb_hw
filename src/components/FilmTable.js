import React, { Component } from "react";
import Film from "./Film";
import './FilmTable.css';

class FilmTable extends Component{

  render(){
    const filmNodes = this.props.film.map((film) => {
      return (
        <Film name={film.name} url={film.url} key={film.id} />
      );
    });
    return(
      <div className="film-table">
      <ul>
        {filmNodes}
        </ul>
      </div>
    );
  }
}
export default FilmTable;
