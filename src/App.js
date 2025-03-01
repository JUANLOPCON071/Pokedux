import { Col } from 'antd';
import PokemonList from './componentes/PokemonList/PokemonList';
import Searcher from './componentes/Searcher/Searcher';
import './App.css';

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList/>
    </div>
  );
}

export default App;
