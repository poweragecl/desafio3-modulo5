import { useContext, useEffect, useState } from "react";
import { Pokecard } from "../components/Pokecard";
import { PokemonContext } from "../context/pokemonset";
import { useParams } from "react-router-dom";


export const PokemonDetail = () => {

    const {nombrepokemon} = useParams();
    const [pokemonStats, setPokemonStats] = useState([]);
    const {pokemon} = useContext(PokemonContext);

    const getPokemonStats = async (selectedPoke) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPoke}`);

            if(response.ok){
                const data = await response.json();
                setPokemonStats([data]);
            }

        } catch (err){
            console.log("Error en el fetch", err);
        }

    }

    useEffect(() => {
        if(nombrepokemon){
            getPokemonStats(nombrepokemon);
        }else{
            getPokemonStats(pokemon);
        }
        
    }, [nombrepokemon, pokemon]);

    return(

        <div className="card-container">


                {pokemonStats.map((s, index) => (
                    
                    <Pokecard key={index} imagen={s.sprites.front_default} nombre={s.name} tipos={s.types} stats={s.stats

                    }></Pokecard>

                ))}

        </div>

    )
}