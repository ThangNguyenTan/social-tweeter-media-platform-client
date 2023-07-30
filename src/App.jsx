import { SignUp, SignIn } from "./pages";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="144717482930-tdan13gajurfuudo66r28bbbdlv3iera.apps.googleusercontent.com">
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
