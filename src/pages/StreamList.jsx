import { useState } from "react";

function StreamList() {
  const [movie, setMovie] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (movie) {
      setList([...list, movie]);
      setMovie("");
    }
  };

  return (
    <div>
      <h1>StreamList</h1>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={handleAdd}>Add to List</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
