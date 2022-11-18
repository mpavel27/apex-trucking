import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

const router = express.Router()
const prisma = new PrismaClient()

router.post('/create', async (req, res) => {
    let username = req.body.username,
        email = req.body.email,
        password = await bcrypt.hash(req.body.password, 10),
        question1 = req.body.question1,
        tmpid = req.body.tmpid,
        age = req.body.age;

    const user = await prisma.users.create({
        data: {
            user_name: username,
            email: email,
            password: password,
            truckersmp_id: tmpid,
            active: false
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
})

router.post('/login', async function(req, res, next) {
    const { email, password } = req.body;

    try {
        const user = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.send({
                error: 'Ne pare rău, se pare că datele introduse sunt invalide, vă rugăm încercați din nou.'
            });
        }

        bcrypt.compare(password, user.password, (err, result) => {
            if (err) return callback(err);
            if(!result) {
                return res.send({
                    error: 'Ne pare rău, se pare că datele introduse sunt invalide, vă rugăm încercați din nou.'
                });
            }
            const token = jwt.sign({ user: user }, "$2a$12$trUk6rvP/fmWsI5Sjc17TegRJBJZBZ2jfMzvt6UB.VI/TGgkuiPTu", {
                expiresIn: "20m", // it will expire token after 20 minutes and if the user then refresh the page will log out
            });
            res.status(200).json({ token: token });
        });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
});

router.get('/getUser', async function(req, res) {
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

module.exports = router;