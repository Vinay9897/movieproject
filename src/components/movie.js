import { movies } from './getmovies';
import React, { Component } from 'react'
export default class movie extends Component {
    render() {
        let movie = movies.results;
        return (
            <>
                {
                    movie.length == 0 ?
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div>
                                {
                                    movie.map((movieObj) => (
                                        <div className="card movies-card">
                                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                                alt={movieObj.title} className="card-img-top banner-img" />
                                            <h1 className="card-title movie-title">
                                                {movieObj.original_title}</h1>
                                            <div className='buttom-wrapper'>
                                                <a href="#" className="btn btn-primary ">Go somewhere</a>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                }
            </>
        )
    }
}
