import express from 'express'
import Course from '../models/course.js'
import User from '../models/users.js'
import auth from '../middlewares/auth.js'
const router = express.Router()

router.post('/course', auth, (req, res) => {
    try {
        var user = req.user
        const name = req.body.name
        const teacherId = req.user._id
        Course.create({name: name, teacherId: teacherId}, (err, course) => {
            if(err){
                res.status(502).send(err)
            }
            else{
                const courseId = `${course._id}`
                user.courses = user.courses.concat({course: courseId})
                User.updateOne({_id: user._id}, {courses: user.courses}, (err, data) => {
                    if(err) {
                        res.status(501).send(err)
                    }
                    else{
                        res.status(200).send({data, course})
                    }
                })
            }
        })
    }
    catch (e){
        res.status(500).send(e)
    }
})

router.get('/course',auth, async(req,res) => {
    try{
        const user = req.user
        const courses = user.courses
        var courses_info = []
        for(const course of courses){
            const courseInfo = await Course.findById(course.course)
            courses_info.push(courseInfo)
        }
        res.status(200).send(courses_info)
    }
    catch (e) {
        res.status(500).send(e)
    }
    
})

router.get('/course/:courseId',auth, async(req,res) => {
    try{
        const courseId = req.params.courseId
        const course_info = await Course.findOne({_id: courseId})
        res.status(200).send({course_info})
    }
    catch (e) {
        res.status(500).send(e)
    }
    
})

router.post('/course/:courseId',auth, async(req,res) => {
    try{
        const courseId = req.params.courseId
        const data = req.body
        Course.updateOne({_id: courseId}, data, (err, course_info) => {
            if(err) {
                res.status(501).send(err)
            }
            else{
                res.status(200).send({course_info})
            }
        })
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
    
})

router.get('/all_courses',auth, async(req,res) => {
    try{
        const all_courses = await Course.find({})
        if(all_courses){
            res.status(200).send(all_courses)
        }
        else{
            res.status(200).send({})
        }
    }
    catch (e) {
        res.status(500).send(e)
    }
    
})

router.post('/user/course',auth, async(req, res) => {
    const courseId = req.body.courseId
    const user = req.user
    user.courses = user.courses.concat({course: courseId})
    User.updateOne({_id: user._id}, {courses: user.courses}, (err, data) => {
        if(err) {
            res.status(501).send(err)
        }
        else{
            res.status(200).send({data,user})
        }
    })
})

export default router