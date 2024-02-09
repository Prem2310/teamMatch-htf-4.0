import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ChatRoom from './pages/chatroom'
import Landing from './pages/Landing'


function App() {

  return (
        <div>
            <Router>
                <Routes>
                    <Route path="/chats" element={<ChatRoom />}/>
                    <Route path='/' element={<Landing/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
