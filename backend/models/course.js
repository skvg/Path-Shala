import mongoose from 'mongoose'
const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    teacherId: {
        type: String,
        required: true,
    },
    coursePic: {
        type: String,
        required: false,
        default: 'https://static.vecteezy.com/system/resources/previews/000/459/620/original/physics-science-icons-vector.jpg'
    },
    videos: [{
        id: {
            type: Number,
            required: true,
        },
        video: {
            type: String,
            required: true,
        }
    }]
})

export default mongoose.model('Course', courseSchema)