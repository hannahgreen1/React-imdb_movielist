import React from 'react';
import MovieList from '../components/MovieList.js'

class MovieBox extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      data: [{
        title:"Toy Story",
        text:"A film about toys coming to life"
      },
    {
      title:"Cinderella",
      text:"Princess films"
    }]
    }
  }

render() {
  return(
    <div>
      <h2>IMDB Movies</h2>
      <MovieList data={this.state.data}/>
    </div>
  )
};

};


export default MovieBox;
