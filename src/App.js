import React from "react";

import Header from './components/Header'
import Mint from "./components/Mint";
import Collection from "./components/Collection";

import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Mint />
        <Collection />
      </Container>
    </div>
  );
}

export default App;
