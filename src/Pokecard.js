import React from 'react';
import './Pokecard.css';


  import styled from 'styled-components';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



function Pokecard(cards) {
    let imgSrc=`${POKE_API}${cards.id}.png`;
    return (
        <div className = "Pokecard">
                <h1>{cards.name}</h1>
                <img src={imgSrc} alt={cards.name} />
                <div>Type: {cards.type}</div>
                <div>Exp: {cards.base_experience}</div>   
            </div>
    );
}


  export default Pokecard;