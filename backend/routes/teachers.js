import express from 'express'
import auth from '../middlewares/auth.js'
import User from '../models/users.js'
const router  = express.Router()

router.get('/teachers' ,auth, async (req, res) => {
    try {
        const teachers = await User.find({profession: 'teacher'})
        if(teachers){
            res.status(200).send(teachers)
        }
        else{
            res.status(200).send({})
        }
    }
    catch(e) {
        res.status(500).send(e)
    }
})

export default router