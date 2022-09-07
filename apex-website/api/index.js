import express from 'express';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from "body-parser";

import apiRoutes from "./routes/routes";

const app = express();
const csrfProtection = csurf({
    cookie: {
        httpOnly: true,
    },
});

app.use(cors({
    origin: "http://localhost:3000/",
    credentials: true,
}));
app.use(cookieParser());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(csrfProtection, (req, res, next) => {
    res.cookie('XSRF_TOKEN', req.csrfToken(), { httpOnly: false });
    next();
});

app.use('/v1', apiRoutes)

module.exports = {
    path: '/api',
    handler: app
}