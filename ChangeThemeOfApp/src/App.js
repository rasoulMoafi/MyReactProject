import { useState,useEffect } from "react";

function App() {

  // =============== get mode meqdare avalie falsw ya true ro az local storage migire ==========
  // =========age meqdar avalie nbud settinge window ro ba prefers-color-scheme check mikone va injuri meqdar avalie ro dar nazar mogire=========
  // =======pashmaaam=======
  const getMode = () => {
    const initialMode = localStorage.getItem("mode");
    if (initialMode == null) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true;
      } else {
        return false
      }
    } else {
      return JSON.parse(localStorage.getItem("mode"))
    }
    
  }
  const [mode, setMode] = useState(getMode());
  console.log(mode);
  // =======inja meqdare mode ro ba shenase "mode" dar localstorage zakhire mikone=========
  useEffect(() => {
    localStorage.setItem("mode",JSON.stringify(mode))
  }, [mode]);
  return (
    <div className={mode ? "App dark-mode":"App"}>
      <header className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>خانه</li>
              <li>درباره ما</li>
              <li>تماس با ما</li>
            </ul>
            <label className="switch">
              <input type="checkbox" onChange={() => setMode(!mode)}
              checked={mode}></input>
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </header>

      <div className="content">
        <div className="container">
          <h2>{ mode ? "دارک مود فعال شده و فضا تاریکه" :"لایت مود فعال شده و فضا روشنه" }</h2>
        </div>
        <div className="container">
          <div className="card">
            <div className="card-item">
              <h2>کارت اول</h2>
              <img src="image/1.png" alt="image1"></img>
            </div>
            <div className="card-item">
              <h2>کارت دوم</h2>
              <img src="image/2.png"alt="image2"></img>
            </div>
            <div className="card-item">
              <h2>کارت سوم</h2>
              <img src="image/3.png"alt="image3"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
