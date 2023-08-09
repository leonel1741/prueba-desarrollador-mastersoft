import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { setFavorites } from '../store/slices/favorites.slice';
import imageHome from '../assets/imagen-peliculas.jpeg';

const Movies = () => {

    const [movie, setMovie] = useState({});
    const [nameInput, setNameInput] = useState("");
    const [movieTitle, setMovieTitle] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://www.omdbapi.com/?t=${movieTitle}&apikey=d008d647`)
            .then(res => setMovie(res.data))
            .catch(error => console.log(error))
    }, [movieTitle]);

    const searchName = () => {
        setMovieTitle(nameInput);
        if (movie.length !== 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const saveMovie = () => {
        dispatch(setFavorites(movie));
    }

    return (
        <div className="home-container">
            <img src={imageHome} alt="" />
            <h1>Movies</h1>
            <form >
                <input
                    className="input-search"
                    type="text"
                    placeholder='Search Movie'
                    value={nameInput}
                    onChange={e => setNameInput(e.target.value)}
                />
                <button className="btn btn-dark" type="submit" onClick={searchName}>Search</button >
            </form>

            <div className="mt-3 favorites-btn">
                <button className="btn btn-danger m-2" onClick={() => navigate("/favorites")}>Favorites Movies</button>
            </div>

            <ul className={`list-group ${isVisible ? "active" : "none"}`}>
                <li className="list-group-item img-container">
                    <img className='image--card-home' src={movie.Poster} alt="" />
                </li>
                <li className="list-group-item">
                    <b>Title: </b>{movie.Title}
                </li>
                <li className="list-group-item">
                    <b>Released: </b>{movie.Released}
                </li>
                <li className="list-group-item">
                    <b>Director: </b>{movie.Director}
                </li>
                <li className="list-group-item">
                    <b>Actors: </b>{movie.Actors}
                </li>
                <li className="list-group-item btn-container">
                    <button className="btn btn-primary" onClick={() => saveMovie()}>
                        Save Movie
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Movies;