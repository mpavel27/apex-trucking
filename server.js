import { PrismaClient } from '@prisma/client';
import express from 'express';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient()

app.use(cors());

app.get('/greeting',(req,res)=>{
    res.json({greeting:'Hello'})
})

app.get(`/test`, async (req, res) => {
    const result = await prisma.users.create({
        data: {
            username: "test",
            password: "test2",
        },
    })
    res.json(result);
})


app.listen(5000,()=>console.log('server started'))
