import react from "react";
import "./App.css";
import Header from "./componenets/header";
import Home from "./page/home";
import Footer from "./componenets/footer";
import Slide from "./page/slide";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Slide />
      <Footer />
    </>
  );
}

export default App;
