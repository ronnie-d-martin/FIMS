import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFaculty }from '../../../actions/actionsFaculty';
import DataDisplay from "../../Admin/Tables/DataDisplay";

import { Divider, Paper, Typography, Stack } from "@mui/material";
export default function CivilServe (props) {
    const [postData, setPostData] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate
    const userE = JSON.parse(localStorage.getItem('profile'));

    const {user, isLoading} = useSelector((state) => state.facultyData.user);

    useEffect(() => {
      dispatch(getFaculty(userE?.result._id));
  
  
    }, [dispatch])


    useEffect (() => {
        if(user)
        {
          setPostData([{...user}]);
        }
        return () => setPostData([{...user}]);
    },[user]);
  
    return (
        <Paper sx={{ height:'auto', padding:1 }}>
             {postData.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
                        <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>{props.title}</Typography>
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