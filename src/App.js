import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./components/Main-page";

import './styles/style.scss'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
