import React, { useState, useEffect } from 'react';
import { Button, Avatar, Typography, Paper, Divider, Stack } from "@mui/material";
import { useNavigate, useParams  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PersonalInfo from "../Admin/Tables/PersonalInfo";
import EducBack from "../Admin/Tables/EducBack";
import EducBackSecondary from "../Admin/Tables/EducBackSecondary";
import EducBackVoc from "../Admin/Tables/EducBackVoc";
import EducBackCol from "../Admin/Tables/EducBackCol";
import WorkExp from "../Admin/Tables/WorkExp";
import CivilServe from "../Admin/Tables/CivilServe";
import LDI from "../Admin/Tables/LDI";
import {getFacultyData} from '../../actions/actionsAdmin';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import UpdatePersonal from './UpdateAndAdd/UpdatePersonal';
import UpdateEducation from './UpdateAndAdd/UpdateEducation';
import UpdateEducationSecond from './UpdateAndAdd/UpdateEducationSecond';
import UpdateEducationVoc from './UpdateAndAdd/UpdateEducationVoc';
import UpdateEducationCol from './UpdateAndAdd/UpdateEducationCol';

import AddCivilServe from './UpdateAndAdd/AddCivilServe';
import AddWorkExp from './UpdateAndAdd/AddWorkExp';
import AddLDI from './UpdateAndAdd/AddLDI';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  })); 
export default function UserProfileTable (currentId, setCurrentId) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState('panel1');

    const navigate = useNavigate();
    const {users} = useSelector(state => state.adminData);
    useEffect(() => {

        dispatch(getFacultyData());
  
    
      }, [dispatch])
      const acc = users.filter(({_id}) => _id === id);


    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const gridStyle = { padding:3 }
    const avatarStyle = { height:150, width:150}
    const titleStyle = { backgroundColor:'#14213D', textTransform:'uppercase', color:'white' }
    const infoHeadStyle = { fontWeight:700, textTransform:'uppercase' }
    const infoNameStyle = { fontWeight:700, textTransform:'uppercase' }
    const infoEmployeeNumSyle = { fontWeight:500, textTransform:'uppercase' }
    const infoEmailStyle = { fontWeight:400, color:'blue' }
    const Report = () => {
      navigate(`/reportAdmin/${id}`)
    }
    return (

<div>
{acc.map((data, key) => ( 
<Paper key={key} sx={{ height:'auto', margin:4 }}>
  <Divider />
  <Stack justifyContent="flex-start">
                <Button variant="contained" sx={{fontSize: 20, fontWeight:800}} onClick={Report}>Generate PDS</Button>
                </Stack>
                <Divider />
  <Paper align='center' sx={{ height:'auto', width:140, padding:0.5, bgcolor:'#14213D', color:'white' }}><Typography variant="body2" sx={infoHeadStyle} >Faculty Member</Typography></Paper>
  <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={gridStyle}>
      <Avatar align="center" alt={data.name} src={data.picture} sx={avatarStyle} />
      <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={1}>
          <Typography variant="h3" sx={infoNameStyle}>{data.lastName + ', ' + data.firstName + ' '}{data.middleName === 'N/A' ? ' ' : data.middleName}{' '}{data.nameExtension === 'Undefined' ? ' ' : data.nameExtension}</Typography>
          <Typography variant="subtitle1" sx={infoEmployeeNumSyle}>{data.employeeNumber}</Typography>
          <Typography variant="subtitle2" sx={infoEmailStyle}>{data.email}</Typography>
      </Stack>
      <Divider />
  </Stack>    
</Paper>
) )}
<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={titleStyle}>
      <Typography>PERSONAL DETAILS</Typography>
  </AccordionSummary>
      <AccordionDetails>
         <PersonalInfo  currentId={currentId} setCurrentId={setCurrentId} title='Personal Information'/>
         <Divider />
         <Stack direction='row' spacing={5} justifyContent='center'>
         <UpdatePersonal/>
        </Stack>
      </AccordionDetails>
</Accordion>
<Divider />
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={titleStyle}>
      <Typography>EDUCATIONAL BACKGROUND</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <EducBack  currentId={currentId} setCurrentId={setCurrentId} title='Educational Background'/>
    <Stack direction='row' spacing={5} justifyContent='center'>
    <UpdateEducation/>
    </Stack>
    <Divider />
    <EducBackSecondary  currentId={currentId} setCurrentId={setCurrentId}/>
    <Stack direction='row' spacing={5} justifyContent='center'>
    <UpdateEducationSecond/>
    </Stack>
    <Divider />
    <EducBackVoc  currentId={currentId} setCurrentId={setCurrentId}/>
    <Stack direction='row' spacing={5} justifyContent='center'>
    <UpdateEducationVoc/>
    </Stack>
    <Divider />
    <EducBackCol  currentId={currentId} setCurrentId={setCurrentId}/>
    <Stack direction='row' spacing={5} justifyContent='center'>
    <UpdateEducationCol/>
    </Stack>
  </AccordionDetails>
</Accordion>
<Divider />
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={titleStyle}>
      <Typography>CIVIL SERVICE ELIGIBILITY</Typography>
     
  </AccordionSummary>
  <AccordionDetails>
  <CivilServe  currentId={currentId} setCurrentId={setCurrentId} title='Civil Service Eligibility'/>
  <Stack direction='row' spacing={5} justifyContent='center'>
    <AddCivilServe/>
    </Stack>
  </AccordionDetails>
</Accordion>
<Divider />
<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={titleStyle}>
      <Typography>WORK EXPERIENCES</Typography>
    
  </AccordionSummary>
  <AccordionDetails>
  <WorkExp  currentId={currentId} setCurrentId={setCurrentId} title='Work Experience'/>
  <Stack direction='row' spacing={5} justifyContent='center'>
    <AddWorkExp/>
    </Stack>
  </AccordionDetails>
</Accordion>
<Divider />
<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" sx={titleStyle}>
      <Typography >Learning and Development Interventions/Training Programs Attended</Typography>
  </AccordionSummary>
  <AccordionDetails>
  <LDI  currentId={currentId} setCurrentId={setCurrentId} title='Learning and Development Interventions/Training Programs Attended'/>
  <Stack direction='row' spacing={5} justifyContent='center'>
    <AddLDI/>
    </Stack>
  </AccordionDetails>
</Accordion>
</div>

    );
}