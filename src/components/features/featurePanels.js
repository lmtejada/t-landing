import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';

import Container from 'react-bootstrap/Container';
import Title from "../title/title";
import SingleFeature from "./singleFeature";

import image1 from "../../images/manage.jpg";
import image2 from "../../images/access.jpg";
import image3 from "../../images/save.jpg";
import image4 from "../../images/security.jpg";
import image5 from "../../images/rips.gif";
import image6 from "../../images/tisa.gif";

import "./featurePanels.scss";

const FeaturePanels = ({ page }) => (
    <Container className="featurePanels col-sm-12">
        {
            page === "index" ?
                <React.Fragment>
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
                </React.Fragment>
                :
                <React.Fragment>
                    <Title title="TisaMed" />
                    <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
                        <div className="p-5 text-center">
                            <h4 className="text-center">La aplicación web de historias clínicas digitales que te permite trabajar de forma ágil y segura con planes acordes a tus necesidades.</h4>
                            <br></br>
                            <h4 className="text-center">TisaMed se caracteriza por ser:</h4>
                        </div>
                    </ScrollAnimation>
                    <SingleFeature
                        title="Simple"
                        image={image6}
                        orientation="left"
                        animation="left"
                        color={true}>
                        Con módulos precisos e interconectados mediante un flujo natural de actividades propias de la consulta médica, TisaMed ofrece una forma fácil e intuitiva de registrar las historias clínicas sin necesidad de complejas y costosas capacitaciones.
                    </SingleFeature>
                    <SingleFeature
                        title="Poderosa"
                        image={image5}
                        orientation="right"
                        animation="right"
                        color={false}>
                        Desarrollada desde el inicio pensando en el usuario final, TisaMed fue diseñada para satisfacer todas tus necesidades. Almacenamiento de pacientes, diagnósticos, evoluciones, generación de archivos RIPS de forma automática e impresión de historias clínicas. Todo desde un simple explorador web.
                    </SingleFeature>
                    <SingleFeature
                        title="A tu alcance"
                        image={image1}
                        orientation="left"
                        animation="left"
                        color={true}>
                        Desde el plan gratuito hasta el gold TisaMed ofrece todas sus funcionalidades sin limitaciones*. Con precios desde COP 19.900/mes y hasta COP 23.900/mes tendrás acceso a todas las herramientas que llevarán tus historias clínicas a la era digital.
                        <br></br>
                        <br></br>
                        <p className="disclaimer">
                            * todos los planes ofrecen acceso a todos los módulos de la aplicación. La diferencia radica  en la cantidad máxima de pacientes que se pueden registrar por plan.
                        </p>
                    </SingleFeature>
                </React.Fragment>
        }
    </Container>
)

export default FeaturePanels;