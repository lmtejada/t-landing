import React from "react";
import Card from "react-bootstrap/Card";

import "./planCard.scss";

const PlanCard = (props) => (
    <Card className="text-center plan">
        <Card.Header>{props.plan}</Card.Header>
        <Card.Body>
            <Card.Title>{props.price}</Card.Title>
            {props.children}
        </Card.Body>
    </Card>
)

export default PlanCard;