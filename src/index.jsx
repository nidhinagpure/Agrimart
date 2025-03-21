import { createRoot } from "react-dom/client";
import './../src/index.css'
import Navbar,{ MainImage,Chooseus } from "./componets/navbar/Navbar";



const root = createRoot(document.getElementById("root"));

      function App(){
        return (
            <div>
                <Navbar/>
                <MainImage/>
                <Chooseus/>
            </div>
        )
      }

root.render(
    <>
      <App/>
    </>
)