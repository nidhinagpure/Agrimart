import { createRoot } from "react-dom/client";
import './../src/index.css'
import Navbar,{ MainImage,Chooseus } from "./componets/navbar/Navbar";
import HomeCard from './views/home/Home';



const root = createRoot(document.getElementById("root"));

      function App(){
        return (
            <div>
                <Navbar/>
                <MainImage/>
                <Chooseus/>
                <HomeCard/>
            </div>
        )
      }

root.render(
    <>
      <App/>
    </>
)