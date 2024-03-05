import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { TrashCat } from "./Pages/TrashCat/TrashCat";
// import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { Login } from "./Pages/Login/Login";
import { TrashCatDetail } from "./Pages/TrashCatDetails/TrashCatDetail";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="/sortering" element={<TrashCat/>}/>
          <Route path="/sortering/:id" element={<TrashCatDetail/>}/>
          {/* <Route path="/login" element={<Login/>}/> */}
        </Route>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="*" element={<ErrorPage/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
