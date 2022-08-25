import React, { useState, useEffect } from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "./DataDisplay";
import {getFacultyData} from '../../../actions/actionsAdmin';
export default function CivilServe (props) {
    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
     


      const acc = users.filter(({_id}) => _id === id);

    return (
        <Paper sx={{ height:'auto', padding:1 }}>
            {acc.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
                        
                        <Divider />
                        <DataDisplay label="Career service/RA 1080 (Board/Bar) under Special Laws/CES/CSEE Barangay Eligibility/Driver's License" data={data.CScareerService} />
                        <DataDisplay label='Rating' data={data.CSrating}/>
                        <DataDisplay label='Date of Examination /Conferment' data={data.CSdateOfExam}/>
                        <DataDisplay label='Place of Examination /Conferment' data={data.CSplaceOfExam}/>
                        <DataDisplay label='License' data={data.CSlicense}/>
                        <DataDisplay label='License Number' data={data.CSlicenseNo}/>
                        <DataDisplay label='Date of Validity' data={data.CSlicenseDate}/>
            </Stack>
            ) )}
        </Paper>
    );
}