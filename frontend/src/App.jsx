import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'


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
