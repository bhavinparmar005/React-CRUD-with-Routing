import "./App.css";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Login/>}/>
         <Route path="/Home" element ={<Home/>} />
         <Route path="/AddPost" element ={<AddPost/>} />
         <Route path="/EditPost" element ={<EditPost/>} />
         <Route path="/api" element={<ApiPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
