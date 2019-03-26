import React from "react";
import Card from "react-bootstrap/Card";

import "./planCard.scss";

const PlanCard = (props) => (
    <Card onClick={() => redirect(props.planId)} className="text-center plan">
        <Card.Header>{props.plan}</Card.Header>
        <Card.Body>
            <Card.Title>{props.price}</Card.Title>
            {props.children}
        </Card.Body>
    </Card>
);

const redirect = (planId) => {
    window.open(`https://tisamed.tisatechnology.com/createUser/${planId}`, '_blank');
};

export default PlanCard;