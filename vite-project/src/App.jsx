
import './App.css'
import Card3 from './component/CardComponent'
 import pokeman from './data/pokemans.json'
 import Pokemon from './component/Pokemon'

const App = () => {


  return (
    <>
      {/* <Card /> */}
      <h1>Pokeman project</h1>
      <p>this is my react project</p>

      <Card3 title="Hello" />
      <Card3 title="Hello try agian" />



{pokeman.pokemons.map((pokemon) => (
  <Pokemon key={pokemon.id} pokemon={pokemon} />
))}


    </>
  );
};

export default App;
