import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import cookieParse from 'cookie-parser';
import csrf from 'csurf';

const app = express();
const prisma = new PrismaClient()
const corsOptions = { origin: "http://localhost:3000/", credentials: true };
let csrfProtection = csrf({ cookie: true });

app.use(cors(corsOptions));
app.use(cookieParse());

app.get('/api/csrf', csrfProtection, function(req, res) {
    return res.json({csrfToken: req.csrfToken()});
});

app.get('/greeting',(req,res)=>{
    res.json({greeting:'Hello'})
})

app.listen(5000,()=>console.log('server started'))