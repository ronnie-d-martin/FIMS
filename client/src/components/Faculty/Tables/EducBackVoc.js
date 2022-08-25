import React, {useEffect, useState} from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "../../Admin/Tables/DataDisplay";
export default function EducBackVoc (props) {
    
    const userE = JSON.parse(localStorage.getItem('profile'));
    const [educ, setEduc] = useState([])
   
    const {user, isLoading} = useSelector((state) => state.facultyData.user);

    useEffect(() => {
        if(user)
        {
            setEduc([{...user}]);
        }
        return () => setEduc([{...user}]);
    },[user]);

   

    return (
        
        <Paper sx={{ height:'auto', padding:1 }}>
               {educ.map((data, key) => ( 
        <Stack key={key} spacing={0.5} sx={{margin:2}}>
            <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>{props.title}</Typography>
            <Divider />
            <Divider />

            <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>{props.category}</Typography>
            <Divider />
            
                    <DataDisplay label='Name of School' data={data.vnameOfSchool} />
                    <DataDisplay label='Basic Education /Degree /Course' data={data.vbasicEducDegreeCourse} />
                    <DataDisplay label='From' data={data.vfrom}/>
                    <DataDisplay label='To' data={data.vto}/>
                    <DataDisplay label='Year Graduated' data={data.vyearGraduate}/>
                    <DataDisplay label='Highest Level/ Units Earned' data={data.vhighestLevelUnits}/>
                    <DataDisplay label='Scholarship/ Academic Honors Received' data={data.vscholarshipAcademicHonors}/>
            
        </Stack>
        ) )}
    </Paper>
    );
}