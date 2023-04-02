import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import Slider from "./components/Slider/Slider";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Content />
      {/* <hr className="border-b-1 border-pink"></hr> */}
      <Menu />
      <Slider />
    </>
  );
}

export default App;
