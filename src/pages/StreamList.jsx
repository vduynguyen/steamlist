import { useState, useEffect } from "react";

function StreamList() {
  const [movie, setMovie] = useState("");
  const [list, setList] = useState([]);

  // Load list from localStorage if available
  useEffect(() => {
    const savedList = localStorage.getItem("movieList");
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []);

  // Save list to localStorage
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("movieList", JSON.stringify(list));
    }
  }, [list]);

  const handleAdd = () => {
    if (movie) {
      const updatedList = [...list, movie];
      setList(updatedList); // Update the movie list
      setMovie(""); // Clear the input field
    }
  };

  return (
    <div>
      <h1>StreamList</h1>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)} // Set movie input value
        placeholder="Enter movie name"
      />
      <button onClick={handleAdd}>Add to List</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li> // Display the movie list
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
