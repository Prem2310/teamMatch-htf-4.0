import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from "./pages/chatroom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/SearchUser";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/chats" element={<ChatRoom />} />
          <Route path="/" element={<Landing />} />
          <Route path="/searchUser" element={<Dashboard />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
