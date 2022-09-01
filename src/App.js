import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/:userName" element={<Profile />} />
      <Route path="/tweet/:tweetId" element={<Tweet />} />
    </Routes>
  );
}

export default App;
