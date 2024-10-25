import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import InfoSite from "./Pages/Infosite/Info-site";
import Airbnb from "./Pages/Airbnb/Airbnb";
import MemePage from "./Pages/Meme/Meme";
import NoteApp from "./Pages/NotesApp/NotesApp";
import Tenzies from "./Pages/Tenzies/Tenzies";

function Components() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info-site" element={<InfoSite />} />
      <Route path="/airbnb" element={<Airbnb />} />
      <Route path="/meme-generator" element={<MemePage />} />
      <Route path="/notes-app" element={<NoteApp />} />
      <Route path="/tenzies" element={<Tenzies />} />
    </Routes>
  );
}

export default Components;
