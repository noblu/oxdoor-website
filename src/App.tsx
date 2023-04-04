import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Topbar from "./components/Topbar/Topbar";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import Specifications from "./pages/Specifications";

function App() {
  return (
    <>
      <Topbar />
      <Content />
      <Menu />
      <Slider />
      <Navbar />
      <Products/>
      <Specifications/>
      <Footer/>
    </>
  );
}

export default App;
