import React from 'react';
import './Pokecard.css';


  import styled from 'styled-components';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



function Pokecard(cards) {
    let imgSrc=`${POKE_API}${cards.id}.png`;
    return (
        <div className = "Pokecard">
                <h1 className-Pokecard-title>{cards.name}</h1>
                <img src={imgSrc} alt={cards.name} />
                <div className='Pokecard-data'>Type: {cards.type}</div>
                <div className='Pokecard-data'>Exp: {cards.base_experience}</div>   
            </div>
    );
}


  export default Pokecard;