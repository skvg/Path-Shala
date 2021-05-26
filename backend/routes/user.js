import express from 'express'
import auth from '../middlewares/auth.js'
const router = express.Router()

router.get('/user',auth, (req,res) => {
    try {
        res.status(200).send(req.user)
    }
    catch (e){
        res.status(500).send(e)
    }
})

export default router