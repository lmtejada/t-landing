import React from "react";
import Card from "react-bootstrap/Card";

import "./profileCard.scss";
import { FaComment } from "react-icons/fa";

const ProfileCard = (props) => (
    <Card className="text-center profile">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-3">{props.occupation}</Card.Subtitle>
            <Card.Text>
                <FaComment className="icon" />
                {props.children}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default ProfileCard;