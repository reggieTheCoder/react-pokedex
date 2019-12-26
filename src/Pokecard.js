import React from 'react';
import './Pokecard.css';


  import styled from 'styled-components';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice (-3): number);

function Pokecard(cards) {
    let imgSrc=`${POKE_API}${padToThree(cards.id)}.png`;
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