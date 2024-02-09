import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ChatRoom from './pages/chatroom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'


function App() {

  return (
        <div>
            <Router>
                <Routes>
                    <Route path="/chats" element={<ChatRoom />}/>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
