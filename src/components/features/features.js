import React from "react";
import Container from 'react-bootstrap/Container';
import FeatureCard from "./featureCard";

import { FaChartLine, FaMobileAlt, FaPiggyBank, FaLock } from "react-icons/fa";


import "./features.scss";

const Features = () => (
    <Container className="features col-md-12">
        <h1 className="text-center">Sabemos lo que necesitas...</h1>
        <div className="row items">
            <div className="col-md-3 col-sm-12">
                <FeatureCard name="Administrar">
                    <FaChartLine className="icon" />
                    La administración se hace mucho más fácil mediante formularios interactivos que te asisten en el registro, modificación e impresión de información necesaria para la gestión de tus actividades laborales.
                </FeatureCard>
            </div>
            <div className="col-md-3 col-sm-12">
                <FeatureCard name="Acceder">
                    <FaMobileAlt className="icon" />
                    El acceso mediante internet facilita el manejo de tu información, elimina la necesidad de instalar aplicaciones móviles y/o programas. Con sólo tener acceso a internet bastará para que lo utilices.
                </FeatureCard>
            </div>
            <div className="col-md-3 col-sm-12">
                <FeatureCard name="Ahorrar tiempo">
                    <FaPiggyBank className="icon" />
                    La interfaz dinámica del software te permite interactuar con él de manera simple sin necesidad de grandes capacitaciones y confusos manuales.
                </FeatureCard>
            </div>
            <div className="col-md-3 col-sm-12">
                <FeatureCard name="Seguridad">
                    <FaLock className="icon" />
                    Al utilizarse en la web te permite tener la información disponible, segura y actualizada en cualquier lugar y en cualquier dispositivo.
                </FeatureCard>
            </div>
        </div>
    </Container>
)

export default Features;