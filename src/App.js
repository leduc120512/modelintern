import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaulayout/index";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<DefaultLayout />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
