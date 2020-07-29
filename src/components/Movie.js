import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres}){
    return(
        <Link // the whole area of each movie information is now a link for detail page
        to={{ // when react moves to detail page, it will send these data too
            pathname: `movie/${id}`, 
            state:{
                year: year,
                title: title,
                poster: poster,
                summary: summary,
                genres: genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title}></img>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">{genres.map((genre, index) => 
                    <li key={index} className="genres_genre">{genre}</li>)}</ul>
                    <p className="movie_summary">{summary.slice(0, 180)}...</p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;