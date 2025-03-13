import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';
import Searcher from './componentes/Searcher/Searcher';
import PokemonList from './componentes/PokemonList/PokemonList';
import logo from './statics/logo.svg'
import './App.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function App() {
  const pokemons = useSelector((state) => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector((state) => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading ? (<Col offset={12}>
        <Spin spinning size='large' />
      </Col>
      ) : (
        <PokemonList pokemons={pokemons}/>
      )}
    </div>
  );
}

export default App;
