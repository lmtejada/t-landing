import React from "react";
import Card from "react-bootstrap/Card";

import "./profileCard.scss";

const ProfileCard = (props) => (
    <Card style={{ width: '18rem' }} className="text-center">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <button type="button" className="btn btn-primary btn-lg align-self-center">Go somewhere</button>
        </Card.Body>
    </Card>
)

export default ProfileCard;