import { SignUp, SignIn, Settings, UpdateSettings, Home } from "./pages";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider, QueryClient } from "react-query";

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId="144717482930-tdan13gajurfuudo66r28bbbdlv3iera.apps.googleusercontent.com">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/update" element={<UpdateSettings />} />
            </Routes>
          </Router>
        </GoogleOAuthProvider>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
