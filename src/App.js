import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, setUser } from "./redux/userRedux";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = {
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          username: user.email.split("@")[0],
        };
        dispatch(setUser(userData));
        dispatch(setAuth(true));
      } else {
        dispatch(setAuth(false));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (isAuthenticated) {
    return (
      <Router>
        <Navbar />
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
