import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Profile } from "./pages/Profile";
import {SingleTweet} from "./pages/SingleTweet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/:userName" element={<Profile />} />
      <Route path="/tweet/:tweetId" element={<SingleTweet />} />
    </Routes>
  );
}

export default App;
