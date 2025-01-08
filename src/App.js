import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import QuestionPage from "./pages/QuestionPage";
import GenVid1 from "./pages/GenVideo1";
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
  return authenticated === false ? <Outlet /> : <Navigate to="/questionpage" />;
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

  const theRoot = Login();
  const theGenVid1Page = GenVid1();
  const theQuestion = QuestionPage();

  return (
    <div>
      <h1>This is a simple page</h1>
      <Router>
        <Routes>
          <Route path="/" element={theRoot} exact />
          <Route path="/questionpage/*" element={theQuestion} />
          <Route path="/genvid1" element={theGenVid1Page} />
        </Routes>
      </Router>
    </div>
  );

  // return (
  //   <div>
  //     <Router>
  //       <Routes>
  //         <Route
  //           exact
  //           path="/"
  //           element={<PublicRoute authenticated={authenticated} />}
  //         >
  //           <Route exact path="/" element={<Login />} />
  //         </Route>
  //         <Route
  //           exact
  //           path="/questionpage"
  //           element={<PrivateRoute authenticated={authenticated} />}
  //         ></Route>
  //         <Route
  //           // exact
  //           path="/questionpage"
  //           element={theQuestion}
  //         ></Route>
  //         <Route />
  //       </Routes>
  //     </Router>
  //   </div>
  // );
}

export default App;
