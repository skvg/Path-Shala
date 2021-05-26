import express from "express"
import jwt from "jsonwebtoken"
import User from '../models/users.js'
const router = new express.Router()

router.post("/signup", (req,res)=>{
    try {
        var newUser = req.body
        if(newUser.profession.toString() === 'teacher'){
            newUser['profilePic'] = 'https://th.bing.com/th/id/OIP.DV6lyBOdKoIJEgjC4c8NrwHaHa?pid=ImgDet&rs=1'
        }
        User.create(newUser,async (err,user)=>{
            if(err){
                res.status(500).send(err)
            } else {
                const token = await user.generateAuthToken()
                res.status(200).send({user, token})
            }
        })
    } catch(e){
        res.status(400).send()
    }
});

export default router