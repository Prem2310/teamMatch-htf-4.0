const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    user1:String,
    user2:String,
    roomCode:String,
})

module.exports=mongoose.model('ChatRooms',userSchema)