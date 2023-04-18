import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
// import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Grievances from "./components/Grievances/Grievances";
import NSS from "./components/NSS/NSS";
import Clubs from "./components/Clubs/Clubs";
import About from "./components/About/About";
import Contact from "./components/ContactUs/Contact";
import Footer from "./components/Footer/Footer";
import Events_Calendar from "./components/Calendar/Calendar";
import Hostel from "./components/HostelMix/Hostel";
import Features from "./components/Home/Features/Features";
import Features2 from "./components/Home/Features/Features2";
import Ranks from "./components/Rank/Ranks";
import ECell from "./components/Clubs/ECell";
import Naac from "./components/Rank/Naac.jsx";
import Monitor from "./components/Monitor";
import 'flowbite';
import Health from "./components/Health/Health";
import Club2 from "./components/Clubs/Club2"
import Club3 from "./components/Clubs/Club2"
import Club4 from "./components/Clubs/Club2"

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/grieve" element={<Grievances />} />
          <Route path="/ncc" element={<NSS />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cal" element={<Events_Calendar/>} />
          <Route path="/hostel" element={<Hostel/>} />
          <Route path="/rank" element={<Ranks/>}></Route>
          <Route path="/test" element={<Monitor/>}></Route>
          <Route path="/club/ecell" element={<ECell/>}></Route>
          <Route path="/rank/naac" element={<Naac/>}></Route>
          <Route path="/health" element={<Health/>}></Route>
          <Route path="/club2" element={<Club2/>}></Route>
          <Route path="/Club3" element={<Club2/>}></Route>
          <Route path="/club4" element={<Club2/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
