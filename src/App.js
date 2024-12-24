import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import QuestionPage from "./pages/QuestionPage";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  Outlet
} from "react-router-dom";
import { auth } from "./services/firebase";

function PrivateRoute({ authenticated }) {
  return authenticated === true ? (
    <Outlet />
  ) : (
    <Navigate to={{ pathname: "/" }} />
  );
}

function PublicRoute({ authenticated }) {
  return authenticated === false ? <Outlet /> : <Navigate to="QuestionPage" />;
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    console.log("authenticated", authenticated);
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName); //crashes if user isn't logged on as user is then null
      }
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, []); //empty dependecy array, which means it only runs once

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<PublicRoute authenticated={authenticated} />}
          >
            <Route exact path="/" element={<Login />} />
          </Route>
          <Route
            exact
            path="/QuestionPage"
            element={<PrivateRoute authenticated={authenticated} />}
          >
            <Route exact path="/QuestionPage" element={<QuestionPage />} />
          </Route>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
