import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon"



const App= ()=> {
  const logWhenClicked = (e)=>{
    console.log(e);
    
    console.log("this is a random message");
    
}
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const data = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName = "Pokedex" clickFunction={logWhenClicked}/>
      <BestPokemon abilities = {abilities}/>
      <CaughtPokemon data ={data}/>
  </div>
  );
}
export default App;
