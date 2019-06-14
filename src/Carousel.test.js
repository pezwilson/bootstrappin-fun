import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const currentSlide = 0
  const moveCarousel = jest.fn();
  ReactDOM.render(<Carousel currentSlide={currentSlide} moveCarousel={moveCarousel} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
