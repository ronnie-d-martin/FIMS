import express from 'express';
import mongoose from 'mongoose';
import about from '../models/about.js';


import ABoutModal from '../models/about.js';

const router = express.Router();

export const getAbout = async (req, res) => { 
    try {
        const about = await ABoutModal.find();

        res.status(200).json({data: about});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateAbout = async (req, res) => {
    const { id } = req.params;
    const {vision, mission, goalsDes, logo, goalTitle, goalSub} = req.body;
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        const updateAbout =  await ABoutModal.updateOne (
            {
                "_id" : id
            },{
                $set: { status: status}},
            {
              
            }
        
                
            )
            //const updatedPost = { firstName, _id: id };
    
            //await UserModal.updateOne(id, updatedPost, { new: true });
        
       // const updatedPost = { firstName, _id: id};
    
        // UserModal.findByIdAndUpdate(id, updatedPost, { new: true });
    
        res.json(updatedPost);
    } catch (error)
    {
        res.status(404).json({ message: error.message });
    }
  
}




export default router;