import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import HomePage from "./Pages/HomePage/HomePage";
// import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route index path="/" element={<HomePage />} />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route
              path="/homepage"
              element={
                // <RequireAuth>
                  <HomePage />
                // </RequireAuth>
              }
            />
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;