import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getPokemons } from "../../redux/actions/pokemonAction";

const Pokemons = ({ dataPokemons, loading, error, getPokemons }) => {
  // Get all pokemons to show
  useEffect(() => {
    getPokemons();
  }, []);

  //loading && (return <h1>Loding....</h1>)
  if (loading) {
    return <h1>Loding....</h1>;
  }

  if (error) {
    return <h1>Hubo un error en la consulta!!!!....</h1>;
  }

  return (
    <div>
      {dataPokemons &&
        dataPokemons.map(({ name, url }, i) => (
          <div>
            <a key={i} href={url}>
              {name}
            </a>{" "}
          </div>
        ))}
    </div>
  );
};

//export default Pokemons;

const mapStateToProps = ({ pokemonsReducer }) => {
  console.log("[Pokemons: mapStateToProps]:pokemonReducer", pokemonsReducer);
  return {
    dataPokemons: pokemonsReducer.pokemons,
    loading: pokemonsReducer.loading,
    error: pokemonsReducer.error,
  };
};

const mapDispathToProps = {
  getPokemons,
};

//export default App;
export default connect(mapStateToProps, mapDispathToProps)(Pokemons);
