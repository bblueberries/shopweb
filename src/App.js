import "./App.css";
import Header from "./components/Header";
import Newproduct from "./components/Newproduct";
import Topproduct from "./components/Topproduct";
import Subscribe from "./Subscribe";

function App() {
  return (
    <div id="app">
      <Header />
      <Newproduct />
      <Topproduct />
      <Subscribe />
    </div>
  );
}

export default App;
