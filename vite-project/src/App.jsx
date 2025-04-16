
import './App.css'
import Card3 from './component/CardComponent'
 import pokeman from './data/pokemans.json'
 import Pokemon from './component/Pokemon'
 import AnimalSection from './section/AnimalSection'
import fish from './data/fish.json'

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

<AnimalSection>
  animals={fish,fish}
  title="Fish"
</AnimalSection>

    </>
  );
};

export default App;
