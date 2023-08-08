import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setFavorites } from '../store/slices/favorites.slice';

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
        <div className="grid text-center mx-5 p-1 center">
            <h1>Movies</h1>
            <input
                className="form-control g-col-6 "
                type="text"
                placeholder='Search Movie'
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
            />
            <div className="mt-3">
                <button className="btn btn-dark m-2" type="submit" onClick={searchName}>Search</button >
                <button className="btn btn-danger m-2" onClick={() => navigate("/favorites")}>Favorites Movies</button>
            </div>

            <ul className={`list-group ${isVisible ? "active" : "none"}`}>
                <li className="list-group-item">
                    <button className="btn btn-primary" onClick={() => saveMovie()}>
                        Save Movie
                    </button>
                </li>
                <li className="list-group-item">
                    {movie.Title}
                </li>
                <li className="list-group-item">
                    {movie.Released}
                </li>
                <li className="list-group-item">
                    {movie.Director}
                </li>
                <li className="list-group-item">
                    {movie.Actors}
                </li>

            </ul>
        </div>
    )
}

export default Movies;