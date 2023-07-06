import { useState, useEffect } from "react";
import Login from "./component/Login";
import Form from "./component/Form";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
