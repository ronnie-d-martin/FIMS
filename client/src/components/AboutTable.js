import React, { useState, useEffect } from "react";
import { Paper, Divider, Typography, TextField, Button } from "@mui/material";
import '@fontsource/roboto/500.css';
import { Box } from "@mui/system";
import { useDispatch, useSelector } from 'react-redux';
import { getAbout, getFaculty }from '../actions/actionsFaculty';
export default function AboutTable (props) {

    const [vision, setVision] = useState({vision: 'Infosy is aspiring to be the world’s most successful and important information technology company. Successful in providing our clients appropriate websites and other technology to aid complications. Successful in presenting extraordinary technology to new clients. The corporation is significant because it will continue to be the primary source of much of the invested in this industry.'});
    const [mission, setMission] = useState({mission: 'Infosy exist to offer innovative websites and pioneering technology that pursues to contribute to the productivity and development of various micro and macro enterprises.'})
    const [goals, setGoals]= useState({goals: 'Quality and Excellence - Promoting quality and relevant web designs and development that meet international standards. Relevance and Responsiveness - Knowledge creation and distribution across a wide range of disciplines that are relevant and responsive to rapidly changing local and international situations. Efficiency and Effectiveness - Social, institutional, and individual returns and advantages received from the use of higher technological resources are optimized. '})
    console.log(props.v)

    useEffect(()=>
    {
        if(props.v!=='Infosy is aspiring to be the world’s most successful and important information technology company. Successful in providing our clients appropriate websites and other technology to aid complications. Successful in presenting extraordinary technology to new clients. The corporation is significant because it will continue to be the primary source of much of the invested in this industry.')
        {
            setVision(props.v)
        }
    })



    const divStyle = {padding: 5}

    return (
            <Paper alignItems='flex-start' sx={{ flexGrow:1, width:'inherit', height:'auto', marginTop:5, padding:5 }}>
                <Box sx={divStyle}>
                <Typography variant="h3" sx={{ fontWeight:500 }}>Vision</Typography>
                <Typography variat="h4" sx={{fontWeight:300}}>{vision.vision}</Typography>
                </Box>
                <Divider />
                <Box sx={divStyle}>
                <Typography variant="h3" sx={{ fontWeight:500 }}>Mission</Typography>
                <Typography variat="h4" sx={{fontWeight:300}}>{mission.mission} </Typography>
                </Box>
                <Divider />
                <Box sx={divStyle}>
                <Typography variant="h3" sx={{ fontWeight:500 }}>Goals</Typography>
                <Typography variat="h4" sx={{fontWeight:300}}>In the quest of its mission, the initiatives and efforts of the Infosy are geared towards the achievement of the following goals:</Typography>
                <Box sx={divStyle}>
                <Typography variat="h5" sx={{fontWeight:300}}>{goals.goals} </Typography>
               
                </Box>
                </Box>
                
            </Paper>
    );
}