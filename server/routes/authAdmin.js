import express from 'express';

import { signinAdmin } from '../controllers/authAdmin.js';


const router = express.Router();

router.post('/signinAdmin', signinAdmin);


export default router;