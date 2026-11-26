
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Bookings from "./pages/Bookings";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="*"
          element={
            <div className="container">
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
