import { useSelector } from "react-redux";



const MoviesList = () => {

    const moviesList = useSelector(state => state.favorites);
    console.log 
    return (
        <ul>
            {
                moviesList.map(movie => (
                    <li className="list-group-item">
                        <div>
                            <p>{movie.Title}</p>
                            <p>{movie.Released}</p>
                            <p>{movie.Director}</p>
                            <p>{movie.Actors}</p>
                        </div>
                    </li>
                ))
            }
            <li>Gaaa</li>
        </ul>
    )
};

export default MoviesList;