import AdminHeader from '../../components/Admin/AdminHeader'
import AboutTable from '../../components/AboutTable'
import { Button, Paper, Stack } from '@mui/material';
import React, { useState, useEffect } from "react";

import Dialog from '@mui/material/Dialog';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import About from '../Faculty/About';
import AccountTable from '../../components/Admin/AccountTable';
import Header from '../../components/Faculty/Header'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function AboutManage () {


  const [vision, setVision] = useState({vision: 'Infosy is aspiring to be the world’s most successful and important information technology company. Successful in providing our clients appropriate websites and other technology to aid complications. Successful in presenting extraordinary technology to new clients. The corporation is significant because it will continue to be the primary source of much of the invested in this industry.'});
    const [mission, setMission] = useState({mission: 'Infosy exist to offer innovative websites and pioneering technology that pursues to contribute to the productivity and development of various micro and macro enterprises.'})
    const [goals, setGoals]= useState({goals: 'Quality and Excellence - Promoting quality and relevant web designs and development that meet international standards. Relevance and Responsiveness - Knowledge creation and distribution across a wide range of disciplines that are relevant and responsive to rapidly changing local and international situations. Efficiency and Effectiveness - Social, institutional, and individual returns and advantages received from the use of higher technological resources are optimized. '})
    const user = JSON.parse(localStorage.getItem('profile'));
    const [v, setV]=useState(vision);
    const [m, setM]=useState(mission);
    const [g, setG]=useState(goals);
        const [open, setOpen] = React.useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setV(vision);
          setM(mission);
          setG(goals);
          
         
          setOpen(false);  
   
        };
     
        const handleChangev = (e) => setVision({ ...vision, [e.target.name]: e.target.value });
        const handleChangem = (e) => setMission({ ...mission, [e.target.name]: e.target.value });
        const handleChangeg = (e) => setGoals({ ...goals, [e.target.name]: e.target.value });
       

    const buttonStyle = {width: 'inherit', margin:-5}
    return (
      
        <div className='about-main'>

         
            <Stack direction='column' alignItems='center' justifyContent='center' spacing={0}>
          
{user?.result.userType==='faculty'?  <Stack direction='column'>
                <Header title="ABOUT" component={<AboutTable v={v} m={m} g={g} />}/>
            </Stack> :  <Stack direction='column'>  <AdminHeader title="ABOUT" component={<AboutTable v={v} m={m} g={g} />}/>
                <Button variant="contained" align='center' sx={buttonStyle} onClick={handleClickOpen}>Edit</Button> </Stack>
 }
                <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', bgcolor: '#14213D' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              About
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Stack direction='column' alignItems='center' justifyContent='center' spacing={2} sx={{flexGrow: 1, padding: 20, alignItems:'center'}}>
            <Typography variant="h4" sx={{fontWeight:500}}>Vision</Typography>
            <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          label="Write Here"
          sx={{width:500}}
          name="vision"
          onChange={handleChangev}
        />
    <Typography variant="h4" sx={{fontWeight:500}}>Mission</Typography>
    <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          label="Write Here"
          sx={{width:500}}
          name="mission"
           onChange={handleChangem}
        />

<Typography variant="h4" sx={{fontWeight:500}}>Goals</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={5}
          label="Write Here"
          sx={{width:500}}
          name="goals"
           onChange={handleChangeg}
        />
        </Stack>
      </Dialog>
            </Stack>  
        </div>
    );
}