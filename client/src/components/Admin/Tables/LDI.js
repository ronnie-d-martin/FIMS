import React, { useState, useEffect } from 'react';
import { Divider, Avatar, Paper, Typography, Stack } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "./DataDisplay";
import {getFacultyData} from '../../../actions/actionsAdmin';
export default function LDI (props) {
    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
     


      const acc = users.filter(({_id}) => _id === id);

    return (
       
        <Paper sx={{ height:'auto', padding:1 }}>
              {acc.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
                  
                    <Divider />
                    <DataDisplay label="Learning and development interventions /Training program" data={data.LLtitle} />
                    <DataDisplay label='Inclusive Date of Attendance' data={"From: " + " " +data.LLfrom + " - "+ "To: " +" "+ data.LLto}/>
                    <DataDisplay label='Number of hours' data={data.LLnumOfHours}/>
                    <DataDisplay label='Type of LD' data={data.LLtype}/>
                    <DataDisplay label='Conducted/ sponsored by' data={data.LLconducted}/>
                    <Stack justifyContent="center"  alignItems="center">
                    <Avatar variant="square" alt="" src={data.LLcertificate} sx={{height:300, width:300, bgcolor: "#F8049C"}}>Certificate</Avatar>
                    </Stack>
                   
            </Stack>
            ) )}
        </Paper>
    );
}