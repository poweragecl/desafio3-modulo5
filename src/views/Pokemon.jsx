import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/pokemonset";


export const Pokemon = () => {

    const navigate = useNavigate();

    const [pokemonList, setPokemonList] = useState([]);
    const {pokemon, setPokemon} = useContext(PokemonContext);

    const getPokemon = async () => {

        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1017');
            if(response.ok){
                const data = await response.json();
                setPokemonList(data.results);
            }

        }catch(err){
            console.log("Error en el fetch", err)
        }
  
    }

    useEffect(() => {

        getPokemon();

    }, []);


    const toDetails = () => {
        navigate(`/pokemon/${pokemon}`);
    }

    const handlerChange = (e) => {
        setPokemon(e.target.value);
    }   

    const handlerSubmit = (e) => {
        e.preventDefault();
        toDetails();
    }

    return(
        <>
            <h1>Search for a Pokémon</h1> 

            <div className="form-control">

                <form onSubmit={handlerSubmit}>

                    <select name="" id="" className="pokemon-selector" onChange={handlerChange}>

                    {pokemonList.map((p, index) => (
                            
                            <option key={index} value={p.name}>{`${index} - ${p.name}`}</option>

                        ))}

                    </select>

                    <button type="submit" className="pokemon-submit"> Search</button>

                </form>

            </div>

        </>
    )
}
