import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Menu } from './components/Menu'
import { Pokemon } from './views/pokemon'
import { Home } from './views/home'
import { PokemonDetail } from './views/PokemonDetail'
import { PokemonContext } from './context/pokemonset'  
import { useState } from 'react'


function App() {

  const [pokemon, setPokemon] = useState('');
  const sharedPokemon = {pokemon, setPokemon};


  return (
    <>
      <PokemonContext.Provider value={sharedPokemon}>
        <BrowserRouter>
        
        <Menu></Menu>
        
          <Routes>
            <Route path="/" element={ <Home></Home> }></Route>
            <Route path="/pokemon" element={<Pokemon></Pokemon>}></Route>
            <Route path="/pokemon/:nombrepokemon" element={<PokemonDetail></PokemonDetail>}></Route>
          </Routes>

        </BrowserRouter>
      </PokemonContext.Provider>
    </>
  )
}

export default App
