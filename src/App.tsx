import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokimonListing from "./componants/PokimonListing/PokimonListing";
import { PokemonDetails } from "./componants/PokemonDetails/PokemonDetais";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokimonListing />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
