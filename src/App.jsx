import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { TrachCat } from "./Pages/TrashCat/TrachCat";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/#" element={<TrachCat/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
      
    </Router>
  )
}

export default App
