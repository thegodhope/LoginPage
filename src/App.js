import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/navbar";
import Registrationpage from "./Components/Registrationpage";
import Verify from "./Components/verify";
import Welcomepage from "./Components/welcomepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcomepage />
      <Registrationpage />
      <Verify />
    </div>
  );
}

export default App;
