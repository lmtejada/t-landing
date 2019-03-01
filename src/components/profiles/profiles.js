import React from "react";

import Container from 'react-bootstrap/Container';
import ProfileCard from "./profileCard";
import CardDeck from "react-bootstrap/CardDeck";

import image1 from "../../images/person1.jpeg";
import image2 from "../../images/person2.jpeg";
import image3 from "../../images/person3.jpeg";
import "./profiles.scss";

const Profiles = () => (
    <Container>
        <CardDeck>
            <ProfileCard image={image1} />
            <ProfileCard image={image2} />
            <ProfileCard image={image3} />
        </CardDeck>
    </Container>
)

export default Profiles;