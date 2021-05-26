import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    courses: [{
        course: {
            type: String,
            required: true,
        }
    }],
    profilePic: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/previews/000/356/075/original/vector-male-student-icon.jpg',
        required:false,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = await jwt.sign({_id: user._id.toString()}, 'itismysignature', {expiresIn: '2 days'})
    user.tokens = await user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findByCredentials = async function(email, password){
    const user = await User.findOne({email: email})
    if(!user){
        throw new Error('unable to login')
    }
    if(user.password !== password){
        throw new Error('unable to login')
    }
    return user
}
const User = mongoose.model('User',userSchema)
export default User