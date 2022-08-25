import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import auth  from './routes/auth.js';
import user from './routes/user.js';
import authAdmin from './routes/authAdmin.js';
import admin from './routes/admin.js';

const app = express();
dotenv.config();


//middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
        
app.use('/user', user);
app.use('/auth', auth);
app.use('/admin', admin);
app.use('/authAdmin', authAdmin);
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
.catch((error) =>console.log(`${error} did not connect`));




