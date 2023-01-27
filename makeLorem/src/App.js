import { useState } from "react";
import data from './data';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount >= 4) {
      amount = 4;
    }




    setText(data.slice(0, amount));
  }

  return (
    <div className="section-center">
      <h4>لورم ساز</h4>
      <form className="lorem" onSubmit={handleSubmit}>
        <lable htmlFor="total">تعداد پاراگراف</lable>
        <input
          type="number"
          name="total"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">بساز</button>
      </form>
      <article className="lorem-text">
        {
          text.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </article>
    </div>
  );
}

export default App;
