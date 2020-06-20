import React, {useState} from "react";

const CaughtPokemon = (props)=>{

    const [totalCaught, setTotalCaught] = useState(0);

    function incrementTotal(e) {
        e.preventDefault();
        setTotalCaught(totalCaught+1);
        
    }

    return (<form>
        <p>Caught {totalCaught} Pokemon on {props.data}</p>
        <button onClick={incrementTotal}>Caught</button>
    </form>);
}


export default CaughtPokemon;