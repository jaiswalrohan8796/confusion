import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


function Renderleader(props) {
    return(
        <Card>
            <CardImg src={props.image}/>
            <CardBody>
                <h4>{props.name}</h4>
                <h5>{props.designation}</h5>
                <p>{props.description}</p>
            </CardBody>
        </Card>
    );
}



export default Renderleader;