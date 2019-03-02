import React from "react";
import Card from "react-bootstrap/Card";

import "./featureCard.scss";

const FeatureCard = (props) => (
    <Card className="text-center feature">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
                {props.children}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default FeatureCard;