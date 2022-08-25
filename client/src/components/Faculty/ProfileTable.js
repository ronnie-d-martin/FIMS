import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Avatar, Typography, Paper, Divider, Stack } from "@mui/material";
import '@fontsource/roboto/500.css';

import { useDispatch, useSelector } from 'react-redux';

import PersonalInfo from "./Tables/PersonalInfo"
import EducBack from "./Tables/EducBack"
import CivilServe from './Tables/CivilServe';
import WorkExp from './Tables/WorkExp';
import LDI from './Tables/LDI';
import { getFaculty }from '../../actions/actionsFaculty';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



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

export default function ProfileTable () {
    const userE = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const [expanded, setExpanded] = React.useState('panel1');
    const dispatch = useDispatch();
    const [postData, setPostData] = useState([]);
   
    useEffect(() => {
    
      dispatch(getFaculty(userE?.result._id));
  
  }, [dispatch]);

  const {user, isLoading} = useSelector((state) => state.facultyData.user);

  useEffect (() => {
    if(user)
    {
      setPostData([{...user}]);
    }
    return () => setPostData([{...user}]);
},[user]);



    
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
    const addButtonStyle = {fontWeight:400, height: 45 , width:150, bgcolor:'blue', borderRadius:10 }
      const toPersonalInfo = () => {
        navigate('/manage', {state: {id:1, name:'personal'}})
      }
    
      const toEducation = () => {
        navigate('/manage', {state: {id:2, name:'education'}})
      }
    
      const toCivil = () => {
        navigate('/manage', {state: {id:2, name:'civil'}})
      }
    
      const toWork = () => {
        navigate('/manage', {state: {id:2, name:'work'}})
      }
    
      const toTraining = () => {
        navigate('/manage', {state: {id:2, name:'training'}})
      }

      const Report = () => {
        navigate(`/report/${userE?.result._id}`)
      }


    return (
        <div>
              {postData.map((data, key) => ( 
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
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} onDoubleClick={toPersonalInfo}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" sx={titleStyle}>
                    <Typography>PERSONAL DETAILS</Typography>
                </AccordionSummary>
                    <AccordionDetails>
                        <PersonalInfo />
                    </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} onDoubleClick={toEducation}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx={titleStyle}>
                    <Typography>EDUCATIONAL BACKGROUND</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <EducBack />
                </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} onDoubleClick={toCivil}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx={titleStyle}>
                    <Typography>CIVIL SERVICE ELIGIBILITY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CivilServe />
                </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} onDoubleClick={toWork}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" sx={titleStyle}>
                    <Typography>WORK EXPERIENCES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <WorkExp />
                </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} onDoubleClick={toTraining}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" sx={titleStyle}>
                    <Typography >Learning and Development Interventions/Training Programs Attended</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <LDI />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


