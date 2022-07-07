import React, { useEffect, useState } from "react";
import { FlatList, Text, Image, ScrollView } from "react-native";

import { Layout } from "../Layout";
import { Character } from "./Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getAllCharacters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      const { results: characters } = data || {};
      setCharacters(characters);
    };

    getAllCharacters();
  }, []);

  return (
    <Layout>
      <Text>Character list</Text>
      {characters && (
        <FlatList
          data={characters}
          renderItem={({ item }) => (
            <Character name={item.name} image={item.image} />
          )}
        />
      )}
    </Layout>
  );
};

export default CharacterList;
