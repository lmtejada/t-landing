import React from "react";

import Container from 'react-bootstrap/Container';
import Title from "../title/title";
import SingleFeature from "./singleFeature";

import image1 from "../../images/manage.jpg";
import image2 from "../../images/access.jpg";
import image3 from "../../images/save.jpg";
import image4 from "../../images/security.jpg";

import "./featurePanels.scss";

const FeaturePanels = () => (
    <Container className="featurePanels col-sm-12">
        <Title title="Sabemos lo que necesitas..." />
        <SingleFeature
            title="Administrar"
            image={image1}
            orientation="left"
            animation="left"
            color={false}>
            La administración se hace mucho más fácil mediante formularios interactivos que te asisten en el registro, modificación e impresión de información necesaria para la gestión de tus actividades laborales.
        </SingleFeature>
        <SingleFeature
            title="Acceder"
            image={image2}
            orientation="right"
            animation="right"
            color={true}>
            El acceso mediante internet facilita el manejo de tu información, elimina la necesidad de instalar aplicaciones móviles y/o programas. Con sólo tener acceso a internet bastará para que lo utilices.
        </SingleFeature>
        <SingleFeature
            title="Ahorrar tiempo"
            image={image3}
            orientation="left"
            animation="left"
            color={false}>
            La interfaz dinámica del software te permite interactuar con él de manera simple sin necesidad de grandes capacitaciones y confusos manuales.
        </SingleFeature>
        <SingleFeature
            title="Seguridad"
            image={image4}
            orientation="right"
            animation="right"
            color={true}>
            Al utilizarse en la web te permite tener la información disponible, segura y actualizada en cualquier lugar y en cualquier dispositivo.
        </SingleFeature>
    </Container>
)

export default FeaturePanels;