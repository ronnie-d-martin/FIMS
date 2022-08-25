import React, {useEffect, useState} from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "../../Admin/Tables/DataDisplay";
export default function EducBack (props) {
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