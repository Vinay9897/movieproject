import { movies } from './getmovies';
import React, { Component } from 'react'
import { hover } from '@testing-library/user-event/dist/hover';
export default class movie extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            page: [1]
        }
    }
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
                            <div className='movies-list'>
                                {
                                    movie.map((movieObj) => (
                                        <div className="card movies-card" onMouseEnter={() => this.setState({ hover: movieObj.id })}
                                            onMouseLeave={() => this.setState({ hover: '' })} >
                                            <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                                                alt={movieObj.title} className="card-img-top movies-img" />
                                            <h4 className="card-title movies-title">
                                                {movieObj.original_title}</h4>


                                            <div className='button-wrapper'>
                                                {
                                                    this.state.hover == movieObj.id &&
                                                    <a href="#" className="btn btn-primary movies-btn">ADD</a>
                                                }
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination" >
                                        <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                        {
                                            this.state.page.map((value) =>
                                            (
                                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            ))

                                        }
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>

                }
            </>
        )
    }
}
