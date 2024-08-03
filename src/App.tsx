import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

// The Independent National Electoral Commission (INEC) was established by the 1999 Constitution of the Federal Republic of Nigeria to among other things organize elections into various political offices in the country. The functions of INEC as contained in Section 15, Part 1 of the Third Schedule of the 1999 Constitution (As Amended) and Section 2 of the Electoral Act 2010 (As Amended)
