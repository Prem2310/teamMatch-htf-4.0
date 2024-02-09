import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import ChatRoom from './pages/chatroom'


function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
            <Router>
                <Routes>
                    <Route path="/chats" element={<ChatRoom />}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
