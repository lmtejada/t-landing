import React from "react";

import Container from 'react-bootstrap/Container';
import PlanCard from "./planCard";
import CardDeck from "react-bootstrap/CardDeck";

import { MdErrorOutline, MdDone } from "react-icons/md";

import "./plans.scss";

const getMaxPatients = (plan) => {
    switch (plan) {
        case 'free':
            return <li><MdErrorOutline className="warning" />Máximo 20 pacientes</li>
        case 'silver':
            return <li><MdErrorOutline className="warning" />Máximo 100 pacientes</li>
        case 'gold':
            return <li><MdDone className="check" />Pacientes ilimitados</li>
        default:
            break;
    }
}

const FeaturesList = ({ plan }) => {
    return (
        <ul className="list-unstyled">
            <li><MdDone className="check" />Ingresar nuevos diagnósticos</li>
            <li><MdDone className="check" />Ingresar nuevas evoluciones</li>
            <li><MdDone className="check" />Consultar diagnósticos</li>
            <li><MdDone className="check" />Consultar evoluciones</li>
            <li><MdDone className="check" />Exportar Reportes - RIPS</li>
            <li><MdDone className="check" />Garantía sobre la información</li>
            <li><MdDone className="check" />Soporte por medio de correos</li>
            <li><MdDone className="check" />Creación de pacientes nuevos</li>
            {getMaxPatients(plan)}
        </ul>
    )
};

const Plans = () => (
    <Container className="plans col-md-10">
        <CardDeck>
            <PlanCard plan="free" price="0 /mes" >
                <FeaturesList plan="free" />
            </PlanCard>
            <PlanCard plan="silver" price="$19.900 /mes">
                <FeaturesList plan="silver" />
            </PlanCard>
            <PlanCard plan="gold" price="$23.900 /mes" >
                <FeaturesList plan="gold" />
            </PlanCard>
        </CardDeck>
    </Container>
)

export default Plans;