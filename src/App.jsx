import { BrowserRouter, Routes } from "react-router-dom";
import { TopNavbar } from "./components/TopNavbar";
import { ButtonNavbar } from "./components/ButtonNavbar";
import { Footer } from "./components/Footer";
import { Body } from "./components/body";

function App() {
  return (
    <>
      <TopNavbar />
      <ButtonNavbar />
      <Body />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
