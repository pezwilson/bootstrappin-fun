import React from 'react';
import "./Carousel.scss";

const Carousel = ({ currentSlide, moveCarousel }) => {
  return (
    <div className="carousel slide">
      <ol className="carousel-indicators">
        <li className={currentSlide === 0 ? "active" : ""}></li>
        <li className={currentSlide === 1 ? "active" : ""}></li>
        <li className={currentSlide === 2 ? "active" : ""}></li>
      </ol>
      <div className="carousel-inner">
        <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
          <div className="container">
            <div className="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><button className="btn btn-lg btn-primary">Sign up today</button></p>
            </div>
          </div>
        </div>
        <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><button className="btn btn-lg btn-primary">Learn more</button></p>
            </div>
          </div>
        </div>
        <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
          <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
          <div className="container">
            <div className="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><button className="btn btn-lg btn-primary">Browse gallery</button></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-controls carousel-control-prev" onClick={(e) => { moveCarousel(e, 'prior') }}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-controls carousel-control-next" onClick={(e) => { moveCarousel(e, 'next') }}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}

export default Carousel;
