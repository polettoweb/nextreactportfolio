import React, {Component} from 'react';
import Carousel from 'nuka-carousel';


class HomeSlider extends Component {
  render() {
    return (
        <Carousel slidesToShow={2} slideWidth={1} cellSpacing={50}>
            <img src="/static/img/aqua-pura.jpg" alt="Aqua Pura"/>
            <img src="/static/img/bbvenezia.jpg" alt="B&amp;B Venezia"/>
            <img src="/static/img/belling.jpg" alt="Belling"/>
            <img src="/static/img/bmuk.jpg" alt="Brandy Melville UK"/>
            <img src="/static/img/tankard.jpg" alt="The Lantern Tankard"/>
            <img src="/static/img/stoves.jpg" alt="Stoves"/>
            <img src="/static/img/bmusa.jpg" alt="Brandy Melville USA"/>            
        </Carousel>
    );
  }
}
export default HomeSlider;