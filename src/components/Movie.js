import React from 'react';

const Movie = (props) =>{
    return(
    <div className="movie">
      <h4>{props.title}</h4>
      <p>{props.children}</p>
    </div>
  )
  }
export default Movie;
