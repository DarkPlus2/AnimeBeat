import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDetail from "./pages/AnimeDetail";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

function App() {
  // For demo, hardcode user email
  const userEmail = "test@example.com";

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeDetail />} />
        <Route path="/profile" element={<Profile userEmail={userEmail} />} />
      </Routes>
    </Router>
  );
}

export default App;
