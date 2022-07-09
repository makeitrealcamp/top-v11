export const getAllCharactersAsync = async (page) => {
  try {
    const URL = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await fetch(URL);
    const data = await response.json();
    const { results: characters } = data || {};
    return characters;
  } catch (err) {
    console.warn(err);
  }
};
