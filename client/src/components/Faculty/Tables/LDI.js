import React from 'react';
import { Divider, Paper, Typography, Stack } from "@mui/material";
import DataDisplay from "../../Admin/Tables/DataDisplay";
export default function LDI (props) {
    return (
        <Paper sx={{ height:'auto', padding:1 }}>
            <Stack spacing={0.5} sx={{margin:2}}>
                        <Typography sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>{props.title}</Typography>
                        <Divider />
                        <DataDisplay label="Learning and development interventions /Training program" data='' />
                        <DataDisplay label='Inclusive Date of Attendance' data=''/>
                        <DataDisplay label='Year Graduated' data=''/>
                        <DataDisplay label='Number of hours' data=''/>
                        <DataDisplay label='Type of LD' data=''/>
                        <DataDisplay label='Conducted/ sponsored by' data=''/>
                        <DataDisplay label='Certificate' data=''/>
            </Stack>
        </Paper>
    );
}