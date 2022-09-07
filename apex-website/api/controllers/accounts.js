import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

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

module.exports = router;