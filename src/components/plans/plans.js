import React from "react";

import Container from 'react-bootstrap/Container';
import PlanCard from "./planCard";
import CardDeck from "react-bootstrap/CardDeck";

import "./plans.scss";

const Plans = () => (
    <Container>
        <CardDeck>
            <PlanCard />
            <PlanCard />
            <PlanCard />
        </CardDeck>
    </Container>
)

export default Plans;