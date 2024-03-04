import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { MainLayout } from "./Layout/MainLayout";
import { FrontPage } from "./Pages/FrontPage/FrontPage";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<FrontPage/>} />

        </Route>
      </Routes>
      
    </Router>
  )
}

export default App
