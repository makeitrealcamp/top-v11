import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { Layout } from "../Layout";
import { Character } from "./Character";
import { getAllCharactersAsync } from "../../api/characters";

const LIMINT_OF_PAGES = 42;

const CharacterList = () => {
  const [data, setData] = useState({
    characters: [],
    currentPage: 1,
  });

  const getAllCharacters = async () => {
    if (data.currentPage <= LIMINT_OF_PAGES) {
      const dataCharacters = await getAllCharactersAsync(data.currentPage);
      console.warn(dataCharacters);
      setData((prevState) => ({
        characters: [...prevState.characters, ...dataCharacters],
        currentPage: prevState.currentPage + 1,
      }));
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  const { currentPage, characters } = data;

  return (
    <Layout>
      <Text>Character list</Text>
      {characters && (
        <FlatList
          data={characters}
          numColumns={2}
          renderItem={({ item }) => (
            <Character name={item.name} image={item.image} />
          )}
          ListFooterComponent={() => (
            <View>
              <Text>Loading...</Text>
            </View>
          )}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            getAllCharacters();
          }}
        />
      )}
    </Layout>
  );
};

export default CharacterList;
