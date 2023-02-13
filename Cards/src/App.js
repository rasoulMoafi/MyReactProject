import React, { useState } from 'react';
import SingleQuestion from './Question';
import data from './data';

function App() {

  const [questions, setQuestions] = useState(data);
  return (
    <div className="container bg-light" style={{ marginTop: 100 }}>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <h3>سوالی برایتان پیش آمده؟</h3>
          <div className="info">
            {
              // questions.map((question) => {
              //   return <SingleQuestion key={question.id} {...question} />
              questions.map((question, index) => {
                return <SingleQuestion key={index} {...question} />
              
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
