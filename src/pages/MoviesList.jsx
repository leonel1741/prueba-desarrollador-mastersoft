import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MoviesList = () => {

    const navigate = useNavigate();
    const moviesList = useSelector(state => state.favorites);

    return (
        <div className="movies--list-container">
            <button className="btn btn-dark" onClick={() => navigate(-1)}>
                Back
            </button>
            <ul className="grid text-center card-container">
                {
                    moviesList.map((movie, index) => (
                        <li
                            className="card-item"
                            key={index}>
                            <div>
                                <img src={movie.Poster} alt="" />
                                <p><b>Title: </b>{movie.Title}</p>
                                <p><b>Released: </b>{movie.Released}</p>
                                <p><b>Director: </b>{movie.Director}</p>
                                <p><b>Actors: </b>{movie.Actors}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>

    )
};

export default MoviesList;