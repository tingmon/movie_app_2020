import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => { // 
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading: false}); //this.setState({movies: movies}) leftside is from this.state.movies, rightside is from axios movies
  }

  componentDidMount(){
    this.getMovies();
  }

  renderMovie(movies){
    return(
      <div className="movies">
        {movies.map(movie => (<Movie 
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />))}
      </div>
    )
  }

  render(){
    const {isLoading, movies} = this.state;
    return(
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          this.renderMovie(movies)
        )}
      </section>
    );
  }
}


export default Home;

//<Food fav="kimchi" /> {/*give property 'fav' which has value 'kimchi' to 'Food' component*/}
//'.map' does specific funtion to all item in the array.
// passed parameter dish in '.map' is an object.