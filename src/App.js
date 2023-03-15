import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import HomePage from "./Pages/HomePage/HomePage";
import Cart from "./Pages/Cart/Cart";
import ToDo from "./Pages/ToDo/todo";
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route index path="/cart" element={<Cart/>} />
            <Route index path="/todo" element={<ToDo/>} />
            <Route
              path="/homepage"
              element={
                  <HomePage />
              }
            />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
