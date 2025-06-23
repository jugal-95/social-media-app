import ProfileSetup from "./pages/ProfileSetup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user, loading } = useAuth();

  if (loading) return <h2>Loading...</h2>;

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
           <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </>
  ) : (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<ProfileSetup />} />
      <Route path="/create" element={<CreatePost />} />
    </>
  )}
      </Routes>
    </Router>
  );
};

export default App;
