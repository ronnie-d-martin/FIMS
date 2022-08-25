import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Paper, Typography, Stack, Grid } from "@mui/material";
import { getFaculty }from '../../../actions/actionsFaculty';
import DataDisplay from "../../Admin/Tables/DataDisplay";
import { ClassNames } from '@emotion/react';


const initialState = {firstName: '', middleName: '', nameExtension: '', lastName: '', dateOfBirth: '', age: '', placeOfBirth: '', gender: '', civilStatus: '', picture: '', mobile: '',
    weight: '', height: '', bloodType: '', altEmail: '', telephone: '', citizenship: '', rHouseBlockNo: '', rStreet: '', rSubdivisionVillage: '',
    rBarangay: '', pCityMunicipality: '', rProvince: '', rZipCode: '', pHouseBlockNo: '', pStreet: '', pSubdivisionVillage: '',
    pBarangay: '', pCityMunicipality: '', pProvince: '', pZipCode: '', gsisId: '', pagIbig: '', philHealthId: '', sss: '', tin: '' };
export default function PersonalInfo (props) {
    let firstName;
  
    const {id} = useParams();
  
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
          <DataDisplay label='Email Address' data={data.altEmail} />
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


/*  <Stack alignItems='center' justifyContent='center' sx={{ margin:5}}>
                <Typography sx={{ color:'#BFBFBF'}}>No record found</Typography>
            </Stack>*/