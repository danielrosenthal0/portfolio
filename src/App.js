import React from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail"
import Contact from "./components/Contact";
import Blog from "./components/Blog";

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
