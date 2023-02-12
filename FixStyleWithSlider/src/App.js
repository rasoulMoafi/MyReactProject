import { useState } from "react";

function App() {

  const [hori, setHori] = useState(10);
  const [ver, setVer] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(10);
  const [color, setColor] = useState("#4510d5");
  // console.log(hori,ver,blur,spread,color)
  return (
    <div className="App">
      <div className="control">
        <div className="form-group">
          <label>طول افقی</label>
          <input type="range" min="-100" max="100" value={hori} onChange={(e) => setHori(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>طول عمودی</label>
          <input type="range" min="-100" max="100" value={ver} onChange={(e) => setVer(e.target.value)} />
        </div>
        <div className="form-group">
          <label>تاری</label>
          <input type="range" min="0" max="100" value={blur} onChange={(e) => setBlur(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>سایه</label>
          <input type="range" min="0" max="100" value={spread} onChange={(e) => setSpread(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>رنگ</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        </div>

      </div>
      <div className="output" style={{boxShadow: `${hori}px ${ver}px ${blur}px ${spread}px ${color}`}}>
        <p>box-shadow: {hori}px {ver}px {blur}px {spread}px { color }</p>
        </div>
    </div>
  );
}

export default App;
