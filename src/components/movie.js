// import { movies } from './getmovies';
import React, { Component } from 'react'
import axios from 'axios';
export default class movie extends Component {
    constructor() {
        super();
        this.state = {
            hover: '',
            page: [1],
            currentpage: 1,
            movies: [],
        }
    }
    async componentDidMount() {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?
        sort_by=popularity.desc&api_key=a9e4a80a076f3a4795c6919535d2560f&language=en-US&page=&{this.state.currentpage}`);
        let data = res.data
        this.setState({
            movies: [...data.results]
        })
    }
    changeMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a9e4a80a076f3a4795c6919535d2560f&language=en-US&page=&{this.state.currentpage}`);
        let data = res.data;
        this.setState({
            movies: [...data.results]
        })
    }
    handleNext = () => {
        let arr = []
        for (let i = 1; i <= this.state.page.length + 1; i++) {
            arr.push(i);
        }
        this.setState({
            page: [...arr],
            currentpage: this.state.currentpage + 1
        }, this.changeMovies)
    }
    handlePrevious = () => {
        if (this.state.currentpage != 1) {
            this.setState({
                currentpage: this.state.currentpage - 1
            }, this.changeMovies)
        }
    }
    handleClick = (value) => {
        if (value != this.state.currentpage) {
            console.log("i am called")
            this.setState({
                currentPage: value
            }, this.changeMovies)
        }
    }
    render() {
        return (
            <>
                {
                    this.state.movies.length == 0 ?
                        <div className="spinner-border text-info" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        <div>
                            <h3 className='text-center'><strong>Trending</strong></h3>
                            <div className='movies-list'>
                                {
                                    this.state.movies.map((movieObj) => (
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
                                        <li className="page-item"><a className="page-link" onClick={this.handlePrevious}>Previous</a></li>
                                        {
                                            this.state.page.map((value) =>
                                            (
                                                <li className="page-item"><a className="page-link" >1</a></li>
                                            ))

                                        }
                                        <li className="page-item"><a className="page-link" onClick={this.handleNext}>Next</a></li>

                                    </ul>
                                </nav>
                            </div>
                        </div>
                }
            </>
        )
    }
}
