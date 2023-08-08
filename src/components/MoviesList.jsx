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
                            <p>{movie.title}</p>
                            <p>{movie.released}</p>
                            <p>{movie.director}</p>
                            <p>{movie.actors}</p>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
};

export default MoviesList;