import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import { getPokemon } from './api';
import { setPokemons, setPokemons as setPokemonsActions } from './actions';
import Searcher from './componentes/Searcher/Searcher';
import PokemonList from './componentes/PokemonList/PokemonList';
import logo from './statics/logo.svg'
import './App.css';

function App({ pokemons, setPokemons }) {
  console.log('Pokemosn: ', pokemons);
  

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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
