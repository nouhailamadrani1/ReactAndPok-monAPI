import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const promises = Array.from({ length: 52 }, (_, index) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`).then(response => response.json())
        );
        const pokemonDataList = await Promise.all(promises);
        setPokemonList(pokemonDataList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pokemonList.length > 0 ? (
          pokemonList.map(pokemonData => (
            <div key={pokemonData.id} className="col-md-3 mb-3">
              <div className="card  rounded">
                <img src={pokemonData.sprites.front_default} className="card-img-top" alt="Pokemon" />
                <div className="card-body">
                  <h5 className="card-title m-0 p-0"><samp className="text-success">Nom:</samp>{pokemonData.name}</h5>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
