import io from 'socket.io-client'
import { useEffect, useState, useRef } from 'react'

const socket = io('http://localhost:3000')

function App() {
    const [message, setMessage] = useState("")
    const [messageRecieved, setMessageRecieved] = useState("")
    const [roomCode, setRoomCode] = useState("devvrat")
    const [currUser, setCurrUser] = useState({})

    const [friends, setFriends] = useState([])


    const msg = useRef()

    // const saveSentMessage = (message,username) => {
    //     fetch('http://localhost:5000/chatOperations/room', {


    const sendMessage = () => {

        // saveSentMessage(message,currUser.username)

        socket.emit("sendMessage", { message, roomCode})
        const container = document.createElement('div')
        container.className = 'flex justify-end w-full'
        
        const send = document.createElement('h1')
        send.innerHTML = message
        send.className = 'bg-green-500 p-2 rounded-2xl rounded-br-none max-w-4/6 text-pretty '
 
        container.appendChild(send)
        msg.current.appendChild(container)
        console.log("Message sent")
    }
    
    const joinRoom = () => {
        socket.emit("joinRoom", {roomCode : roomCode})
        console.log("Room joined",roomCode)
    }

    const getUser = (jwt) => {
        fetch('http://localhost:5000/getLoggedInUser', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': jwt
            }
        }).then((res) => {
            return res.json()
        }
        ).then((data) => {
            setCurrUser(data.user)
            setFriends(data.user.friends)
            console.log(data.user,"user")
            console.log(data.user.friends,"friends")
        }
        ).catch((err) => {
            console.log(err)
        }
        )
    }
    


    useEffect(() => {
        joinRoom()
        socket.on("recieveMessage", (data) => {
            setMessageRecieved(data.message)
            const container = document.createElement('div')
            container.className = 'flex justify-start max-w-4/6 '

            const recieve = document.createElement('h1')
            recieve.innerHTML = data.message
            recieve.className = 'bg-blue-500 p-2 rounded-2xl rounded-bl-none text-wrap'

            container.appendChild(recieve)
            msg.current.appendChild(container)
        
        })


        const jwt=document.cookie.split('; ').find(row => row.startsWith('LOGIN_INFO')).split('=')[1];

        getUser(jwt)




    }, [socket])

    const selectedUser = (e) => {
        e.preventDefault()
        const roomString = currUser.username < e.target.innerHTML ? currUser.username + e.target.innerHTML : e.target.innerHTML + currUser.username;
        setRoomCode(roomString)
        joinRoom()
        console.log(roomString,"roomString")
        console.log(e.target.innerHTML)
        console.log("Selected")
    }


  return (
        <div className='p-2 bg-green-100 h-screen flex'>
            <div className='flex flex-col h-full bg-blue-400 w-fit'>
                {
                    friends.map((friend) => {
                        return (
                            <div key={friend} className='p-2 bg-red-400 m-2 rounded-2xl px-10 hover:bg-red-600 cursor-pointer' onClick={selectedUser}>
                                {friend}
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <input type="text" placeholder='Message...' className='border-2 p-2 m-2 border-black rounded-xl' onChange={
                    (e) => {
                        setMessage(e.target.value)
                    }
                }/>
                <button onClick={sendMessage} className='bg-blue-300 hover:bg-blue-600 p-3 rounded-xl'>Send</button>
                <h1>Message</h1>
                <div className='flex flex-col gap-1' ref={msg}>
                    
                </div>
            </div>
        </div>
        // <div className='m-auto w-screen flex justify-center items-center h-screen'>
        //     <div className='m-auto w-1/2 border-2 border-black rounded-xl p-4'>
        //         <h1>Chatting</h1>

        //         <input type="text" placeholder='Room Code...' className='border-2 rounded-xl border-black p-2 m-2' 
        //         onChange={
        //             (e) => {
        //                 setRoomCode(e.target.value)
        //             }
        //         }/>
        //         <button className='bg-blue-300 hover:bg-blue-600 p-3 rounded-xl'
        //         onClick={joinRoom}>Join</button>
        //         <br />


        //     </div>
        // </div>
    )
}

export default App
