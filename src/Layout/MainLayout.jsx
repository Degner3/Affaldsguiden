import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";
import { Navigation } from "../Components/Navigation/Navigation";


export const MainLayout = () => {
  return (
    <div>
      <Navigation/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
