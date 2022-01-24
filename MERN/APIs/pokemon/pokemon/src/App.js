import './App.css';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [pokemons, setPokemons] = useState([]);
  const onClickHandler = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(res => {
        console.log(res);
        setPokemons(res.data.results);
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <button onClick={onClickHandler} className='btn btn-lg btn-success'>Bring me my POKEPEOPLE</button>
      <ul>
        {
          pokemons.map((pokemon, i) => {
            return <li key={i}>{pokemon.name}</li>
          })
        }
      </ul>
    </div>
  );
}
export default App;