import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Details () {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();


    // bring movies and genres from the store
    const movies = useSelector((store) => store.movies);
    const genres = useSelector((store) => store.genres);
    

    //return to home page
    const returnHome = () => {
        history.push('/');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id }) 
        dispatch({ type: 'FETCH_GENRE', payload: id })
    },[])

    return (
        <div className="container">
            {movies.map((movies) => {
                return (
            <div key={movies.id}> 
                <h2>{movies.title}</h2>
                <img src={movies.poster} className="image"/>
                <h3>{movies.description}</h3>
                
            </div>
            )
        })} 
            {/* <h3>Genre: {genres[0].genre}</h3> */}
            <button className="homeBtn" onClick={returnHome}>HOME</button>
        </div>
    )
}


export default Details;