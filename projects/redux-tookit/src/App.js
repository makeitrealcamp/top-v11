import React from "react";
import { useSelector } from "react-redux/";

import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import Pokemons from "./features/pokemons/Pokemons";
import Header from "./features/header/Header";

import { selectUser } from "./features/header/headerSlice";

import "./App.css";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header user={user} />
      <Pokemons />
    </div>
  );
}

export default App;
