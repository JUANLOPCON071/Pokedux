import { useEffect, useState } from 'react';
import { Col } from 'antd';
import { getPokemon } from './api';
import Searcher from './componentes/Searcher/Searcher';
import PokemonList from './componentes/PokemonList/PokemonList';
import logo from './statics/logo.svg'
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes)
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
