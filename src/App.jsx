import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import { MainLayout } from "./Layout/MainLayout";
import { HomePage } from "./Pages/HomePage/HomePage";
import { TrashCat } from "./Pages/TrashCat/TrashCat";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { Login } from "./Pages/Login/Login";
import { TrashCatDetail } from "./Pages/TrashCatDetails/TrashCatDetail";
import { UserPage } from "./Pages/UserPage/UserPage";
import { RecyclingStations } from "./Pages/RecyclingStations/RecyclingStations";
import { RecyclingStationsDetails } from "./Pages/RecyclingStationsDetails/RecyclingStationsDetails";
import { OrderContainer } from "./Pages/OrderContainer/OrderContainer";
import { SignUp } from "./Pages/SignUp/SignUp";


function App() {


  return (
    <Router>
       {/* Definerer ruter for hele applikationen */}
      <Routes>
        {/* Hovedruten, der definerer layoutet for hele applikationen */}
        <Route path="/" element={<MainLayout/>}>
          {/* Definerer ruter for hver side */}

          {/* Forsiden */}
          <Route index element={<HomePage/>}/>
          <Route path="/" element={<HomePage/>}/>

          {/* affaldssortering */}
          <Route path="/sortering" element={<TrashCat/>}/>
          <Route path="/sortering/:id" element={<TrashCatDetail/>}/>

          {/* genbrugsstationer */}
          <Route path="/genbrugsstationer" element={<RecyclingStations/>}/>
          <Route path="/genbrugsstationer/:id" element={<RecyclingStationsDetails/>}/>

          {/* bestille containere */}
          <Route path="/bestilbeholder" element={<OrderContainer/>}/>
        </Route>

        {/* Log ind */}
        <Route path="/login" element={<Login/>}/>
        {/* Sign ind */}
        <Route path="/signup" element={<SignUp/>}/>
        {/* Bruger */}
        <Route path="/profile" element={<UserPage/>}/>
        
        {/* Fejlside */}
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
