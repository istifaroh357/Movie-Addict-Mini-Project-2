import { useEffect, useState } from 'react';
import Axios from 'axios'
import './App.css'
import Navbar from "./components/Navbar"
import Welcome from './components/Welcome'
import Login from './components/Login';

function App() {
  const [moviePopular, setMoviePopular] = useState([]);


  useEffect(() => {
    Axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/movie/popular?api_key=6ad9653522f4ab6c534be1f083172557&language=en-US&page=1',
    })
      .then(function (response) {//response ini adalah data berupa object yang muncul dari data Api yang kita panggil
        console.log(response.data.results)//Nah bagian data, spesial tempatnya ada pada data terus dibukak aja kemana lagi
        setMoviePopular(response.data.results)
      });
  }, []);

  return (
    <>
      <Navbar />
      <Welcome />
      <Login />
      <div className='container'>
        {moviePopular.map((movie, index) => {
          const imgUrl = "https://image.tmdb.org/t/p/w300/"
          return (
            <div key={index}>
              <div className='movie-wrapper'>
                <div className='movie-title'>Title: {movie.title}</div>
                <img className="img-fluid rounded" src={`${imgUrl}${movie.poster_path}`} alt="poster movie" />
                <div className='movie-popularity'>Popularity: {movie.popularity}</div>
                <button data-bs-toggle="modal" data-bs-target={`#${movie.id}`} className="btn-card btn btn-primary">
                  Show more
                </button>
              </div>
              {/* Modal content */}
              <div className="modal fade" id={`${movie.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">{movie.title}</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex">
                      <img className="rounded img-modal-card" src={`${imgUrl}${movie.poster_path}`} alt="Movie poster" />
                      <div className='modal-side'>
                        <p style={{fontWeight: "bold"}}>Movie id: {movie.id}</p>
                        <p style={{fontWeight: "bold"}}>Release:  {movie.release_date}</p>
                        <p style={{textAlign: "justify"}}><span style={{fontWeight: "bold"}}>Overview:</span> <br />{movie.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
      </div>
    </>

  )
}


export default App
