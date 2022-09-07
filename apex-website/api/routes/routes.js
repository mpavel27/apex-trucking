import express from 'express'

const router = express.Router();
const accountController = require('../controllers/accounts');

router.use('/accounts', accountController);
router.get("/csrf",(req,res)=>{
    return res.json({csrfToken:req.csrfToken()});
})

module.exports = router;