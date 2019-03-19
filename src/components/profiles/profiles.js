import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';
import ProfileCard from "./profileCard";

import image1 from "../../images/person1.jpeg";
import image2 from "../../images/person2.jpg";
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
                    Ingeniero Industrial de la Universidad Nacional de Colombia, desarrollador PHP y gerente de proyectos. Más de 8 años de experiencia en la gerencia de proyectos con énfasis en implementación de sistemas ERP en empresas multinacionales. Entre los proyectos más significativos se encuentran Gerdau Brasil, Ternium Colombia y Aceros Arequipa.
                </ProfileCard>
            </div>
            <div className="col-lg-4 col-sm-12">
                <ProfileCard
                    image={image2} name="Mateo Parra" occupation="Ocupación">
                    Ingeniero de Sistemas, Especialista en Gerencia de Información de la Universidad de Medellín. Más de 10 años de experiencia como líder, arquitecto y desarrollador de sistemas web y móviles, en proyectos de diversa naturaleza, desde startups locales hasta proyectos con empresas de la Global Fortune 1000.
                </ProfileCard>
            </div>
            <div className="col-lg-4 col-sm-12">
                <ProfileCard
                    image={image3} name="Daniel Flórez" occupation="Ocupación">
                    Ingeniero de sistemas y computación de la Universidad Tecnológica de Pereira con más de 4 años de experiencia como programador de aplicaciones web, con participación en los diferentes ciclos de vida del desarrollo de software tanto en proyectos en el sector público como en el privado.
                </ProfileCard>
            </div>
        </div>
    </Container>
)

export default Profiles;