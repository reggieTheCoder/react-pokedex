import React from 'react';
import './Pokecard.css';

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


function Pokecard(cards) {
    let imgSrc=`${POKE_API}${cards.id}.png`;
    return (
        <div className = "poke-card">
            <h1 className='card-name'>{cards.name}</h1>  
            <img className='card-img' src={imgSrc} alt ={cards.name} />
            <p className='card-type'>Type: {cards.type}</p>
            <p className ='card-exp'>Exp: {cards.base_experience}</p>
             
    
         </div>
    );
}


  export default Pokecard;