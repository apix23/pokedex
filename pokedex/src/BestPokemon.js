import React from "react";

const BestPokemon = (props)=> {
    
    return(
        <div>
            <p>
            My favourite Pokemon is Squirtle"
            </p>
            <ul>
            {props.abilities.map((element,index)=>{
                return (<li key={index}>{element}</li>)
            })}
            </ul>
        </div>
        )
}

export default BestPokemon;