import { useState } from "react";

function Movies() {
  const [query, setQuery] = useState(""); // For storing search input
  const [movies, setMovies] = useState([]); // For storing search results

  // Fetch movies from TMDB
  const fetchMovies = async () => {
    const apiKey = '9b7a272405f8dff7bd0c17bfe795da14'; // Replace with your actual TMDB API key
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results); // Set the search results into the state
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div>
      <h1>Search for Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query with user input
        placeholder="Search for a movie"
      />
      <button onClick={fetchMovies}>Search</button>

      <ul>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <p>Rating: {movie.vote_average}</p>
              <p>Release Date: {movie.release_date}</p>
            </li>
          ))
        ) : (
          <p>No movies found. Try searching for something else!</p>
        )}
      </ul>
    </div>
  );
}

export default Movies;
