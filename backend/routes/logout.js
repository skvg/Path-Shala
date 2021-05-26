import express from 'express'
import auth from '../middlewares/auth.js'
const router  = express.Router()

router.post('/user/logout',auth, (req, res) =>{
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        res.status(200).send()
    }
    catch (e) {
        res.status(500).send()
    }
})

export default router