import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  auth.onAuthStateChanged((user) => {
    if (user) {
      return setIsAuthenticated(true);
    } else {
      return setIsAuthenticated(false);
    }
  });

  if (isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
