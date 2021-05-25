import React,{useEffect,useState}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movies.css';
import MovieList from './MoviesList'
import MovieListHeading from './MovieListHeading';
import SearchBox from './SearchBox';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    console.log(movies)
    const getMovieRequest = async (searchValue)=>{
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c8e526c8`;

        const response = await fetch(url);

        const responseJson = await response.json();
        
        console.log(responseJson);
        

        if (responseJson.Search){
            setMovies(responseJson.Search);
        }
    };

    useEffect(()=>{
        getMovieRequest(searchValue);
    },[searchValue]);

    return(
        <div className='container-fluid'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <MovieListHeading heading='Movies'></MovieListHeading>
                <SearchBox searchValue = {searchValue} setSearchValue={setSearchValue}></SearchBox>
            </div>
            <div className='row'>
                <MovieList movies={movies}></MovieList>
            </div>
        </div>
    );
};

export default Movies;