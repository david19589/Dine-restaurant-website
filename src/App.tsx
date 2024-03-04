import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import "./App.css";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <Home isClicked={isClicked} setIsClicked={setIsClicked}/>
      <Booking  isClicked={isClicked}/>
    </div>
  );
}

export default App;