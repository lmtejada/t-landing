import React from "react";
import Carousel from 'react-bootstrap/Carousel'
// import Button from 'react-bootstrap/Button';
// import styles from "../sass/carousel.module.scss";

const CustomCarousel = () => (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://diariomedico.blob.core.windows.net/cms/sites/4/2015/02/27/155824955.jpg"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://diariomedico.blob.core.windows.net/cms/sites/4/2015/02/27/155824955.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://diariomedico.blob.core.windows.net/cms/sites/4/2015/02/27/155824955.jpg"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default CustomCarousel;