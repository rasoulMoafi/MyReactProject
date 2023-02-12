import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState("");
  console.log(value);
  console.log(results);
  const AccessKey = "O4ULI4SsK0z2f7vbJYpsjGuwLWF0wv7MSRdzcmcdGVA";
  //api.unsplash.com/
  // /search/photos
  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  const fetchimage = () => {
    fetch(
      `https://api.unsplash.com/search/photos/?client_id=${AccessKey}&per_page=12&query=${value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      });
  };
  return (
    <>
      <div className="App">
        <span> جست و جو </span>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="btn" onClick={fetchimage}>
          {" "}
          ارسال{" "}
        </button>
      </div>
      <div className="gallery">
        {results &&
          results.map((res) => <img key={res.id} src={res.urls.regular} />)}
      </div>
    </>
  );
}

export default App;
