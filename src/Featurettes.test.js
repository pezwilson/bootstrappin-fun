import React from 'react';
import ReactDOM from 'react-dom';
import Featurettes from './Carousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Featurettes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
