import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import "./planCard.scss";

const PlanCard = (props) => (
    <Card className={`text-center plan ${props.plan}`}>
        <Card.Header>{props.plan}</Card.Header>
        <Card.Body>
            <Card.Title>{props.price}</Card.Title>
            {props.children}
            <Button>Seleccionar</Button>
        </Card.Body>
        {/* <Card.Footer>{props.price}</Card.Footer> */}
    </Card>
)

export default PlanCard;