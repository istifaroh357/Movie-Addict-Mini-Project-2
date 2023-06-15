import Navbarr from "../Components/Navbarr";
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

    const [carousel, setCarousel] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);
    const baseImgUrl = "https://image.tmdb.org/t/p/w500";
    // Carousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'",
            {
                headers: {
                    accept: 'aplicatio/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRjMzQ3MmZlNzMxNTI5NDA2OGViNjA2ZjFlNmZlOCIsInN1YiI6IjY0MmU5MjUzNTRhOGFjMGFiYTYwM2NkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rwvN9lH7hy_yHF5Un_Ntkp-65mgpnTWaRs4exv9jOr4"
                }
            }
        )
            .then(function (response) {
                setCarousel(response.data.results)
            })
    }, [])


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            {
                headers: {
                    accept: 'aplicatio/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmRjMzQ3MmZlNzMxNTI5NDA2OGViNjA2ZjFlNmZlOCIsInN1YiI6IjY0MmU5MjUzNTRhOGFjMGFiYTYwM2NkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rwvN9lH7hy_yHF5Un_Ntkp-65mgpnTWaRs4exv9jOr4"
                }
            }
        )
            .then(function (response) {
                setTopRated(response.data.results)
            })
    }, [])

    return (
        <>
            <Navbarr />
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {carousel.slice(1, 4).map(item => {
                    return (
                        <Carousel.Item key={item.id}>
                            <img
                                className="d-block w-100 img-fluid img-carousel"
                                src={`${baseImgUrl}${item.backdrop_path}`}
                            />
                        </Carousel.Item>)
                })}
            </Carousel>
            <div className="pre-beranda">
                <h3>Welcome to Movie Addict</h3>
                <p>Find the popular movie, top rated movie, now playing, and up coming movie here</p>
            </div>
            <div className="beranda">
                <h3>Top 5 Popular Movies This Week</h3>
                <div className="sub-beranda">
                    {carousel.slice(1, 6).map(popular => {
                        return (
                            <div className="gridd" key={popular.id}>
                                <img className="img-fluid img-popular rounded" src={`${baseImgUrl}${popular.poster_path}`} alt="" />
                            </div>
                        )
                    })}
                </div>

                <h3>Top 5 Top Rated Movies This Week</h3>
                <div className="sub-beranda">
                    {topRated.slice(1, 6).map(topRates => {
                        return (
                            <div className="gridd">
                                <img className="img-fluid rounded img-topRated" src={`${baseImgUrl}${topRates.poster_path}`} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;