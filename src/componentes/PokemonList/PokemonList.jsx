import PokemonCard from "../PokemonCard/PokemonCard";
import './PokemonList.css'

const PokemonList = ({ pokemons = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10] }) => {

  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon, index) => {
        return <PokemonCard key={index} />;
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;