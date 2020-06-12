import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon"



const App= ()=> {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away'];
  const data = new Date().toLocaleDateString();
  return (
    <div>
      <Logo appName = "Pokedex"/>
      <BestPokemon abilities = {abilities}/>
      <CaughtPokemon data ={data}/>
  </div>
  );
}
export default App;
