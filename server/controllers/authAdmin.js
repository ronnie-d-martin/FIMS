import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import AdminModal from '../models/admin.js';
const adminSec = 'admin';
const facultySec = 'faculty';
export const signinAdmin = async (req, res) => {
    const {email, password} = req.body;

    try{

            const existingUser = await AdminModal.findOne({ email });

            if (!existingUser) return res.status(404).json({message: "User doesn't exist."});
    
            const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    
            if (!isPasswordCorrect) return res.status(400).json({message: "Incorrect password!"});
    
            const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, facultySec, { expiresIn: "8h" });
    
            res.status(200).json({ result: existingUser, token });
        

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.' });
    }
}   


