import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Details () {
    const history = useHistory();
    const { id } = useParams();
    console.log('the id is, ', id);
    const dispatch = useDispatch();


    // bring movies and genres from the store
    const movies = useSelector((store) => store.movies);
    const genres = useSelector((store) => store.genres);
    

    //return to home page
    const returnHome = () => {
        console.log('home btn click');
        history.push('/');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAILS', payload: id }) 
        dispatch({ type: 'FETCH_GENRE', payload: id })
    },[])

    return (
        <div className="container">
            
            {movies.map((movie) => {
                return (
            <div key={movie.id}> 
                <h2>Title: {movie.title}</h2>
                <img src={movie.poster} className="image"/>
                {/* <h3>Genre: {genres[0].name}</h3> */}
                <h3>Description: {movie.description}</h3>
                {/* <button className="homeBtn" onClick={returnHome}>HOME</button> */}
            </div>
            )
        })} 
            <h3>Genre: {genres[0]} </h3>
            <button className="homeBtn" onClick={returnHome}>HOME</button>
        </div>
    )
}


export default Details;