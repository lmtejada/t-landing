import React from "react";
import { Link } from "gatsby";

import Carousel from 'react-bootstrap/Carousel';

import image1 from "../../images/medicine.jpeg";
import image2 from "../../images/business.jpeg";
import image3 from "../../images/brainstorming.jpeg";
import "./carousel.scss";

const CustomCarousel = () => (
    <Carousel controls={false}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
            />
            <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex flex-column">
                    <h1>TisaMed</h1>
                    <p>Administración de historias clínicas</p>
                    <Link to="/tisa-med/">
                        <button type="button" className="btn btn-primary btn-lg align-self-center">Conoce más</button>
                    </Link>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
            />
            <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex flex-column">
                    <h1>TISA</h1>
                    <p>Time saving technology</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
            />
            <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex flex-column">
                    <h1>Third slide label</h1>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)

export default CustomCarousel;