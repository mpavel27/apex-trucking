import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import bodyParser from "body-parser";
import bcrypt from 'bcrypt';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';

const app = express();
const prisma = new PrismaClient()

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser());

const csrfProtection = csurf({ cookie: true });
app.use(csrfProtection);

app.use(function (req, res, next) {
    res.cookie('XSRF-TOKEN', req.csrfToken(), { httpOnly: false });
    res.locals._csrf = req.csrfToken();
    next();
});

app.post('/api/user/add', async (req, res) => {
    let username = req.body.username,
        email = req.body.email,
        password = await bcrypt.hash(req.body.password.toString(), 10),
        question1 = req.body.question1,
        tmpid = req.body.tmpid,
        age = req.body.age;
    const user = await prisma.users.create({
        data: {
            user_name: username,
            email: email,
            password: password,
            truckersmp_id: tmpid
        }
    });
    const applications = await prisma.application.create({
        data: {
            age: age,
            about_section: question1,
            user_id: user.user_id
        }
    });
    res.send('success');
});

app.post('/api/login', async function(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await prisma.users.findUnique({
            where: {
                email: email
            }
        });

        if (!user) {
            const error = new Error("user with this email not found!");
            error.statusCode = 401;
            throw error;
        }

        const comparePassword = bcrypt.compare(password, user.password);

        if (!comparePassword) {
            const error = new Error("password is not match!");
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign({ user: user }, "$2a$12$trUk6rvP/fmWsI5Sjc17TegRJBJZBZ2jfMzvt6UB.VI/TGgkuiPTu", {
            expiresIn: "20m", // it will expire token after 20 minutes and if the user then refresh the page will log out
        });
        res.status(200).json({ token: token });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

app.get('/api/getUser', async function(req, res) {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, "$2a$12$trUk6rvP/fmWsI5Sjc17TegRJBJZBZ2jfMzvt6UB.VI/TGgkuiPTu");
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        throw error;
    }
    res.send(decodedToken);
});

app.get('/api/isAuth', async function(req, res, next) {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        throw error;
    }
    const token = authHeader.split(" ")[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, "$2a$12$trUk6rvP/fmWsI5Sjc17TegRJBJZBZ2jfMzvt6UB.VI/TGgkuiPTu");
    } catch (err) {
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken) {
        const error = new Error("Not authenticated.");
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
});

app.get('/api/csrf', function(req, res) {
    return res.json({csrfToken: req.csrfToken()});
});

app.get('/api/checkToken/:token', async (req, res) => {
    const checkUser = await prisma.users.findUnique({
        where: {
            token: req.params.token,
        },
    })
    console.log(checkUser.user_name);
});

app.get('/greeting',(req,res)=>{
    res.json({greeting:'Hello'})
})

app.listen(5000,()=>console.log('server started'))