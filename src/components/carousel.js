import React from "react";
import Button from 'react-bootstrap/Button';
import styles from "../sass/carousel.module.scss";

const Carousel = () => (
    <Button variant="primary" size="lg" disabled className={styles.button}>
        Primary button
    </Button>
)

export default Carousel;