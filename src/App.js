import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Marketing from './Marketing';
import Featurettes from './Featurettes';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMobileNav: false,
      currentSlide: 0,
    };
  }

  toggleMobileNav = () => {
    const currentDisplayState = this.state.displayMobileNav;
    this.setState({ displayMobileNav: !currentDisplayState });
  }

  moveCarousel = (e, direction) => {
    e.preventDefault();
    const currentSlide = this.state.currentSlide;
    let nextSlide;
    if (currentSlide === 0) {
      nextSlide = direction === 'prior' ? 2 : 1
    } else if (currentSlide === 1) {
      nextSlide = direction === 'prior' ? 0 : 2
    } else {
      nextSlide = direction === 'prior' ? 1 : 0
    }
    this.setState({ currentSlide: nextSlide });
  }

  render() {
    return (
      <>
        <Header displayMobileNav={this.state.displayMobileNav} toggleMobileNav={this.toggleMobileNav} />
        <main role="main">
          <Carousel currentSlide={this.state.currentSlide} moveCarousel={this.moveCarousel} />
          <div className="container marketing">
            <Marketing />
            <Featurettes />
          </div>
          <Footer />
        </main>
      </>
    );
  }
}

export default App;
