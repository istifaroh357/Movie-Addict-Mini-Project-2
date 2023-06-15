import Navbarr from "../Components/Navbarr";
import { useEffect, useState } from "react";
import axios from 'axios'
import './NowPlaying.css';


const NowPlaying = () => {

    const [movie, setMovie] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
            {
                headers: {
                    accept: 'aplicatio/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRjMzQ3MmZlNzMxNTI5NDA2OGViNjA2ZjFlNmZlOCIsInN1YiI6IjY0MmU5MjUzNTRhOGFjMGFiYTYwM2NkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rwvN9lH7hy_yHF5Un_Ntkp-65mgpnTWaRs4exv9jOr4"
                }
            }
        )
            .then(function (response) {
                console.log((response.data.results))
                setMovie(response.data.results)
            })
    }, [])

    return (
        <>
            <Navbarr />
            <div className="search-bar">
                <h2>Movie Addict</h2>
                <p>Explore about Now Playing movie list</p>
                <input type="search" placeholder="Find your favourite movie here..."/> <button className="btn btn-primary">Search</button>         
            </div>
            <div className="container fluid">
                {movie.map(item => {
                    return (
                        <div className="card" key={item.id}>
                            <p className="title-card">{item.title} </p>
                            <img src={`${baseImgUrl}${item.poster_path}`} alt="" className="img-fluid img-card" />
                            <button type="button" className="btn btn-primary-modal" data-bs-toggle="modal" data-bs-target={`#${item.id}`} style={{backgroundColor: "rgb(42, 116, 190)"}}>
                                Show more
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id={item.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <img src={`${baseImgUrl}${item.backdrop_path}`} alt="" className="img-fluid img-modal" />
                                            <div className="popularity-grup">
                                                <p>Rating: {item.vote_average}</p>
                                                <p>Popularity: {item.popularity}</p>
                                                <p>Release: {item.release_date}</p>
                                            </div>
                                            <h4>Overview:</h4>
                                            <p>{item.overview}</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>

        </>
    )
}

export default NowPlaying;