import { Col } from 'antd';
import Searcher from './componentes/Searcher';
import PokemonList from './componentes/PokemonList';
import './App.css';
import PokemonCard from './componentes/PokemonCard';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {/* <PokemonCard/> */}
      <PokemonList/>
    </div>
  );
}

export default App;
