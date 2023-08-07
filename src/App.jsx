import {
  SignUp,
  SignIn,
  Settings,
  UpdateSettings,
  Home,
  Profile,
  Explore,
  Bookmark,
} from "./pages";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/update" element={<UpdateSettings />} />
          </Routes>
        </Router>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
