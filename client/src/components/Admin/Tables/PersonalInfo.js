import React, { useState, useEffect } from 'react';
import { Divider, Paper, Typography, Stack, Chip } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DataDisplay from "./DataDisplay";
import {getFacultyData} from '../../../actions/actionsAdmin';
export default function PersonalInfo (props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
     


      const acc = users.filter(({_id}) => _id === id);
      
    
    return (
        
       
        <Paper sx={{ height:'auto', padding:1 }}>
        {acc.map((data, key) => ( 
        <Stack key={key} alignitems={'center'} spacing={0.5} sx={{margin:2}}>
        <Typography  sx={{ fontWeight:500, padding:1, textAlign:'center', textTransform:'uppercase' }}>{props.title}</Typography>
        <Divider />
        <DataDisplay label='First Name' data={data.firstName}/>
        <DataDisplay label='Last Name' data={data.lastName} />
        <DataDisplay label='Middle Initial' data={data.middleName} />
        <DataDisplay label='Name Extension' data={data.nameExtension} />
        <Divider/>
        <DataDisplay label='Birthday' data={data.dateOfBirth} />
        <DataDisplay label='Age' data={data.age} />
        <DataDisplay label='Place of Birth' data={data.placeOfBirth} />
        <Divider/>
        <DataDisplay label='Gender' data={data.gender} />
        <DataDisplay label='Civil Status' data={data.civilStatus} />
        <DataDisplay label='Citizenship' data={data.citizenship} />
        <Divider/>
        <DataDisplay label='Blood Type' data={data.bloodType} />
        <DataDisplay label='Height' data={data.height} />
        <DataDisplay label='Weight' data={data.weight} />
        <Divider/>
        <DataDisplay label='Telephone Number' data={data.telephone} />
        <DataDisplay label='Mobile Number' data={data.mobile} />
        <DataDisplay label='Email Address' data={data.email} />
        <DataDisplay label='Alternative Email Address' data={data.altEmail} />

   
        <Divider textAlign="center">Resident Address</Divider>
      
        <DataDisplay label='House/Block/Lot No.' data={data.rHouseBlockNo} />
        <DataDisplay label='Street' data={data.rStreet} />
        <DataDisplay label='Subdivision/Village' data={data.rSubdivisionVillage} />
        <DataDisplay label='City/Municipality' data={data.rCityMunicipality} />
        <DataDisplay label='Province' data={data.rProvince} />
        <DataDisplay label='ZIP Code' data={data.rZipCode} />
        <Divider textAlign="center">Permanent Address</Divider>
        <DataDisplay label='House/Block/Lot No.' data={data.pHouseBlockNo} />
        <DataDisplay label='Street' data={data.pStreet} />
        <DataDisplay label='Subdivision/Village' data={data.rSubdivisionVillage} />
        <DataDisplay label='City/Municipality' data={data.pCityMunicipality} />
        <DataDisplay label='Province' data={data.pProvince} />
        <DataDisplay label='ZIP Code' data={data.pZipCode} />
     
       
        <Divider/>
        <DataDisplay label='Employee No' data={data.employeeNumber} />
        <DataDisplay label='GSIS ID No' data={data.gsisId} />
        <DataDisplay label='PAG-IBIG ID No' data={data.pagIbig} />
        <DataDisplay label='PHILHEALTH No' data={data.philHealthId} />
        <DataDisplay label='SSS No' data={data.sss} />
        <DataDisplay label='TIN No' data={data.tin} />
       
    </Stack>
  
    ) )}
</Paper>
    );
}