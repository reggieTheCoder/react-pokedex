import React from 'react'
import Pokecard from './Pokecard';
import './Pokedex.css';


function Pokedex (pokemon) {
    const data = [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
        {id: 28, name: 'Reggie', type: 'Awesome', base_experience: 1000},
        {id: 19, name: 'Marcus', type: 'Baby Boy', base_experience: 900}
    ];

   
    const cards = data;
    

   return (
       <div className='Pokedex'>
           <h1>Pokedex!</h1>
           {
               cards.map(card => <Pokecard 
                id={card.id} 
                name={card.name} 
                type={card.type} 
                base_experience = {card.base_experience}
                 
                />
            )}
             
       </div>
   );
}



export default Pokedex;