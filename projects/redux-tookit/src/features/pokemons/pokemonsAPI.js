export const getPokemons = () => {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      const { results } = data || {};
      resolve({ data: results });
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

/*
getPokemons()
.then((data)=>{
  .then()
  .then()
})
.catch((err)=>{})
*/
