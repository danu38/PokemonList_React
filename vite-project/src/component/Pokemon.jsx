

  const pokeman = ({ pokemon }) => {
    return (
        <div key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.height}</p>
          <p>{pokemon.category}</p>
        </div>
    );
};
  
  export default pokeman;