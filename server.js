import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import bodyParser from 'body-parser';

const app = express();
const prisma = new PrismaClient()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(bodyParser.json());

app.use(cookieParser());
const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

app.use(function (req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.locals._csrf = req.csrfToken();
    next();
});

app.post('/api/user/add', csrfProtection, function(req, res) {
    res.send(req.params)
});

app.get('/api/csrf', csrfProtection, function(req, res) {
    return res.json({csrfToken: req.csrfToken()});
});

app.get('/greeting',(req,res)=>{
    res.json({greeting:'Hello'})
})

app.listen(5000,()=>console.log('server started'))