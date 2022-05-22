import { movies } from './getmovies';
import React, { Component } from 'react'
export default class Banner extends Component {
    render() {
        // console.log(movies)
        let movie = movies.results[1];
        return (
            <>
                {
                    movie == '' ?
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        :
                        <div className="card banner-card">
                            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className="card-img-top banner-img" />
                            <div className="card-body">
                                <h1 className="card-title banner-title">
                                    {movie.original_title}</h1>
                                <p class="card-text banner-text">{movie.overview}</p>
                                {<a href="#" class="btn btn-primary">Go somewhere</a>}
                            </div>
                        </div>


                }
            </>
        )
    }
}
