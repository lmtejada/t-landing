import React from "react";

import Container from 'react-bootstrap/Container';
import Title from "../title/title";
import PlanCard from "./planCard";

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
    <Container className="plans col-sm-10">
        <Title title="Planes y precios" />
        <div className="row items">
            <div className="mb-5 mx-auto col-lg-4 col-sm-8">
                <PlanCard planId={1} plan="free" price="0 /mes" >
                    <FeaturesList plan="free" />
                </PlanCard>
            </div>
            <div className="mb-5 mx-auto col-lg-4 col-sm-8">
                <PlanCard planId={2} plan="silver" price="$19.900 /mes">
                    <FeaturesList plan="silver" />
                </PlanCard>
            </div>
            <div className="mb-5 mx-auto col-lg-4 col-sm-8">
                <PlanCard planId={3} plan="gold" price="$23.900 /mes" >
                    <FeaturesList plan="gold" />
                </PlanCard>
            </div>
        </div>
    </Container>
);

export default Plans;