import React from 'react';
import Movie from './Movie.js';

class MovieList extends React.Component{

  render(){

    const movieComponents = this.props.data.map((comment, index) => {
      return <Movie title={comment.title} key={index}>{comment.text}</Movie>
    })

    return(
      <div className="movie-list">
        {movieComponents}
      </div>
    )
  }

}


export default MovieList;
