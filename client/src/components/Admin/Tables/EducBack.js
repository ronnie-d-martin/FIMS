import React, { useState, useEffect } from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "./DataDisplay";
import {getFacultyData} from '../../../actions/actionsAdmin';
export default function EducBack (props) {

    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
     


      const acc = users.filter(({_id}) => _id === id);
    return (


        <Paper sx={{ height:'auto', padding:1 }}>
             {acc.map((data, key) => ( 
            <Stack key={key} spacing={0.5} sx={{margin:2}}>
             
                <Divider />
               
                        <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>Elementary</Typography>
                        <DataDisplay label='Name of School' data={data.enameOfSchool} />
                    <DataDisplay label='Basic Education /Degree /Course' data={data.ebasicEducDegreeCourse} />
                    <DataDisplay label='From' data={data.efrom}/>
                    <DataDisplay label='To' data={data.eto}/>
                    <DataDisplay label='Year Graduated' data={data.eyearGraduate}/>
                    <DataDisplay label='Highest Level/ Units Earned' data={data.ehighestLevelUnits}/>
                    <DataDisplay label='Scholarship/ Academic Honors Received' data={data.escholarshipAcademicHonors}/>
                    </Stack>
           
            ) )}
        </Paper>
    );
}