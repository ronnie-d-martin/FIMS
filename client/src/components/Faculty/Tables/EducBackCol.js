import React, {useEffect, useState} from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "../../Admin/Tables/DataDisplay";
export default function EducBackCol (props) {
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
            
                    <DataDisplay label='Name of School' data={data.cnameOfSchool} />
                    <DataDisplay label='Basic Education /Degree /Course' data={data.cbasicEducDegreeCourse} />
                    <DataDisplay label='From' data={data.cfrom}/>
                    <DataDisplay label='To' data={data.cto}/>
                    <DataDisplay label='Year Graduated' data={data.cyearGraduate}/>
                    <DataDisplay label='Highest Level/ Units Earned' data={data.chighestLevelUnits}/>
                    <DataDisplay label='Scholarship/ Academic Honors Received' data={data.cscholarshipAcademicHonors}/>
            
        </Stack>
        ) )}
    </Paper>
    );
}