import React, { useEffect } from "react";

const BestPokemon = (props)=> {

    
    return(
        <div>
            <p>
            My favourite Pokemon is Squirtle"
            </p>
            <ul>
            {props.abilities.map((element,index)=>{
                return (<li key={index}>{element.ability.name}</li>)
            })}
            </ul>
        </div>
        )
}
const BestPokemonFetcher = () => {
    const [bestPokemon, setBestPokemon] = React.useState(null);

    useEffect(()=>{

        fetch("https://pokeapi.co/api/v2/pokemon/1/")
        .then((response) => response.json())
        .then((data) => setBestPokemon(data.abilities))

    },[]);

    return (bestPokemon && (
        
        <BestPokemon abilities={bestPokemon}/>
    

    ))
    
}

export default BestPokemonFetcher;
//export default BestPokemon;