import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import NavBar from "./Components/NavBar";
import BottomNav from "./Components/BottomNav";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ProjectDetail from "./Components/ProjectDetail"
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";

function App() {
  return (
    <Router>
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectDetail/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
        <BottomNav/>
        <Analytics />
    </div>
      
    </Router>
  );
}

export default App;
