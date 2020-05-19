import React, { Component } from "react";
import FilmTable from "../components/FilmTable";
import HeaderBox from "../components/HeaderBox";
import MoreFilms from "../components/MoreFilms";
import './FilmListBox.css';

class FilmListBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      film: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
  }


  render(){
    return (
      <div className="film-list-box">
      <HeaderBox title="Upcoming UK Film Releases" />
      <FilmTable film={this.state.film}/>
      <MoreFilms title="View More Upcoming Releases" />
      </div>
    );
  }
}

export default FilmListBox;
