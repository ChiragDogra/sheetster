import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Homepage";
import FormPage from "./pages/FormPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form/:id" element={<FormPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
