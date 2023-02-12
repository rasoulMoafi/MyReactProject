import React, { useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";

import data from "./Data";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];
  //   console.log(index);
  //   console.log(data.length);
  const nextSlide = () => {
    setIndex((index) => {
      if (index === data.length - 1) {
        index = -1;
      }
      let newIndex = index + 1;
      return newIndex;
    });
  };
  const prevSlide = () => {
    setIndex((index) => {
      if (index === 0) {
        index = data.length;
      }
      let newIndex = index - 1;

      return newIndex;
    });
  };

  const randomSlide = () => {
    let randomIndex = Math.floor(Math.random() * data.length);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    if (randomIndex === data.length) {
      randomIndex = 0;
    }
    setIndex(randomIndex);
  };
  return (
    <div className="reviews">
      <div className="review-img">
        <img src={image} />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="review-button">
        <button onClick={nextSlide}>
          <FaChevronCircleLeft />
        </button>
        <button onClick={prevSlide}>
          <FaChevronCircleRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomSlide}>
        شانسی
      </button>
    </div>
  );
}

export default Review;
