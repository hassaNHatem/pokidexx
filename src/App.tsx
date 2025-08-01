import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokimonListing from "./componants/PokimonListing/PokimonListing";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokimonListing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
