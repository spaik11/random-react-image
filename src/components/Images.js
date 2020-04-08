import React, { Component } from 'react';

const images = [
    '/images/barcelona.jpg',
    '/images/brazil.jpg',
    '/images/hawaii.jpg',
    '/images/istanbul.jpg',
    '/images/italy.jpg',
    '/images/japan.jpg',
    '/images/korea.jpg',
    '/images/london.jpg',
    '/images/nyc.jpg',
    '/images/peru.jpg'
];

class Images extends Component {
    state = {
        image: '/images/nyc.jpg'
    };

    randomImage = () => {
        this.setState({ image: images[Math.floor(Math.random() * 10)]})
    };

    render() {

        return (
            <div>
                <img 
                    style={{ height: '300px', width: '300px' }} 
                    src={this.state.image} 
                    alt='...'/>
                <br />
                <button 
                    style={{ height: '50px', width: '70px'}}
                    onClick={this.randomImage}>Click Me</button>
            </div>
        )
    };
};

export default Images;