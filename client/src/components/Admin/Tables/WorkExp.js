import React, { useState, useEffect } from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "./DataDisplay";
import {getFacultyData} from '../../../actions/actionsAdmin';

export default function WorkExp (props) {
    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
     


      const acc = users.filter(({_id}) => _id === id);
    return (
        <Paper sx={{ height:'auto', padding:1 }}>
              {acc.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
               
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