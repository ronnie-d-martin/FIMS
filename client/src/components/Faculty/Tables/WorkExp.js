import React, { useState, useEffect } from 'react';
import DataDisplay from "../../Admin/Tables/DataDisplay";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFaculty }from '../../../actions/actionsFaculty';

export default function WorkExp (props) {
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
  
    console.log(postData)

    return (
        <Paper sx={{ height:'auto', padding:1 }}>
             {postData.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
                <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>{props.title}</Typography>
                <Divider />
                        <DataDisplay label='Inclusive Dates' data={"From:  "+ "   " + data.WEfrom + "To: "+ " " + data.WEto} />
                        <DataDisplay label='Position' data={data.WEposition}/>
                        <DataDisplay label='Department /Agency /Office /Company' data={data.WEdepartment}/>
                        <DataDisplay label='Monthly Salary' data={data.WEmonthlySalary}/>
                        <DataDisplay label='Salary /Job /Pay Grade' data={data.WEslp}/>
                        <DataDisplay label='Status of Appointment' data={data.WEstatusOfAppointment}/>
                        <DataDisplay label="Gov't service" data={data.WEgov}/>
            </Stack>
            ) )}
        </Paper>
    );
}