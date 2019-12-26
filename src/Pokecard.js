import React from 'react';
import './Pokecard.css';
import {
    Card, CardHeader, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ListGroupItem, ListGroup, Row, Col, Container, 
  } from 'reactstrap';

  import styled from 'styled-components';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const WrapperContainer = styled.div `
width: 50%;
height: 50%;
margin: auto;
padding: 2%;
font-weight: bold;
background-color: grey;
`;


function Pokecard(cards) {
    let imgSrc=`${POKE_API}${cards.id}.png`;
    return (
        <div className = "poke-card">
            <WrapperContainer>
                <Card >
                    <Row>
                        <Col>
                    <CardHeader >{cards.name}</CardHeader>
                    <CardBody>
                    <CardImg  src={imgSrc} alt={cards.name} />
                    <ListGroup>
                        <ListGroupItem>Type: {cards.type}</ListGroupItem>
                        <ListGroupItem>Exp: {cards.base_experience}</ListGroupItem>
                    </ListGroup>
                    </CardBody>
                    </Col>
                    </Row>
                </Card>
            </WrapperContainer>
               
            </div>
         
    );
}


  export default Pokecard;