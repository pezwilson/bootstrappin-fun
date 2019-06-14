import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const displayMobileNav = false
  const toggleMobileNav = jest.fn();
  ReactDOM.render(<Header displayMobileNav={displayMobileNav} toggleMobileNav={toggleMobileNav} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
