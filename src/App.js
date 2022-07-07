import "./App.css";
import MockmanEs from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Footer } from "./components";
import { HomePage, Login, Signup, NotePage, ArchivePage, TrashPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/addnote" element={<NotePage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/trash" element={<TrashPage />} />
      <Route path="/mock" element={<MockmanEs  />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
