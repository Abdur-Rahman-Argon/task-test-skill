import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Manu from "./components/Manu/Manu";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Manu></Manu>
    </div>
  );
}

export default App;
