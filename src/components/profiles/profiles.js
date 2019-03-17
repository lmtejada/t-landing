import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';
import ProfileCard from "./profileCard";

import image1 from "../../images/person2.jpeg";
import image2 from "../../images/person1.jpeg";
import image3 from "../../images/person3.jpeg";
import "./profiles.scss";

const Profiles = () => (
    <Container className="profiles col-sm-12">

        <ScrollAnimation animateIn="pulse">
            <h1 className="text-center">Nuestro equipo</h1>
            <hr className="divider" />
        </ScrollAnimation>

        <div className="row items">
            <div className="col-lg-4 col-sm-12">
                <ProfileCard
                    image={image1} name="Felipe Marín" occupation="Ocupación">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ProfileCard>
            </div>
            <div className="col-lg-4 col-sm-12">
                <ProfileCard
                    image={image2} name="Mateo Parra" occupation="Ocupación">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ProfileCard>
            </div>
            <div className="col-lg-4 col-sm-12">
                <ProfileCard
                    image={image3} name="Daniel Flórez" occupation="Ocupación">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </ProfileCard>
            </div>
        </div>
    </Container>
)

export default Profiles;