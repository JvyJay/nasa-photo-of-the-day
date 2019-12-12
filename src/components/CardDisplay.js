import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const CardDisplay = (props) => {
    return (
        <Card>
            <CardImg alt="NASA" src={props.hdurl}></CardImg>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.explanation}</CardText>
                <CardSubtitle>{props.date}</CardSubtitle>
            </CardBody>
        </Card>
    )
}

export default CardDisplay;