import React, { useEffect } from 'react';
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from './data.js';
import './Faq.css';
import Question from './Question.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (
    <section id="faq">
      <div className="faq" data-aos="zoom-in">
        <div className="faq-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>سوالات متداول</h2>
          <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>

        <div className="questions">
          {
            questions && questions.map((question) =>
              <Question
                key={question.id}
                title={question.title}
                answer={question.answer}
              />
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Faq;
