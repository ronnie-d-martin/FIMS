import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCivil } from '../../../actions/actionsFaculty';
import { getFaculty }from '../../../actions/actionsFaculty';

import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide  } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {CScareerService: '', CSrating: '', CSdateOfExam: '', CSplaceOfExam: '', CSlicenseNo: '', CSlicenseDate: '', CSlicense: ''};
export default function AddCivilServe (props) {

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [edu, setEdu] = useState(initialState);
  const userE = JSON.parse(localStorage.getItem('profile'));
  
  const {users} = useSelector((state) => state.facultyData);

  
  useEffect(() => {
    dispatch(getFaculty(userE?.result._id));
  }, []);

  useEffect(() => {
    if(users){
      setEdu({...users});
    }
  }, [users]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateButtonStyle = { height:45, width:100, bgcolor:'#FD9D4F', borderRadius:10 }

  const saveButtonStyle = { width:100, bgcolor:'#26324B', borderRadius:10, color:'white' }
  const cancelButtonStyle = { width:100, margin:1, bgcolor:'#26324B', borderRadius:10, color:'white' }
  const paperStyle ={
    margin:10,
    padding:5
  }
  const longInputStyle = { borderRadius: 2 }
  const shortInputStyle = { width:250, borderRadius: 2 }

  const handleSubmit = async (e) => { 
    e.preventDefault();
   
    setOpen(false);
   
    console.log(dispatch(updateCivil(userE?.result._id, edu)));
    console.log(edu)
    window.location.reload();
    
    
  };

  const handleChange = (e) => setEdu({ ...edu, [e.target.name]: e.target.value });


    return (
        <div>
            <Button variant="contained" sx={updateButtonStyle} onClick={handleClickOpen}>
                Update
            </Button>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
        
              <AppBar sx={{ bgcolor:'#14213D', position:'fixed'  }}>
                <Toolbar>
                  <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    Update {props.title}
                  </Typography>
                  <Button autoFocus ariant="outlined" sx={cancelButtonStyle} onClick={handleClose}>
                  Cancel
                  </Button>
                  <Button autoFocus sx={saveButtonStyle} onClick={handleSubmit}>
                  Save
                  </Button>
                </Toolbar>
              </AppBar>

              <Paper sx={paperStyle}>
                <form>
                  <Stack direction='column' spacing={3} justifyContent='center' alignItems='center'>
                    <TextField fullWidth id="outlined-required" name="CScareerService" onChange={handleChange} variant='outlined' label="Career service/RA 1080 (Board/Bar) under Special Laws/CES/CSEE Barangay Eligibility/Driver's License" sx={longInputStyle}/>
                    <TextField id="outlined-required" name="CSrating" onChange={handleChange} variant='outlined' label="Rating (if applicable)" sx={shortInputStyle} />
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                      <Typography>Date of Examination/Conferment</Typography>
                      <TextField  id="outlined-start-adornment" name="CSdateOfExam" onChange={handleChange} type="date" variant='outlined' sx={shortInputStyle}/>
                      <Divider orientation="vertical" flexItem />
                      <TextField id="outlined-required" name="CSplaceOfExam" onChange={handleChange} variant='outlined' label="Place of Examination/Conferment" sx={shortInputStyle} />
                    </Stack>
                    <Divider textAlign='center'>License (if applicable)</Divider>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                      <TextField id="outlined-required" name="CSlicense" onChange={handleChange} variant='outlined' label="license" sx={shortInputStyle} />
                      <Divider orientation="vertical" flexItem />
                      <TextField id="outlined-required" name="CSlicenseNo" onChange={handleChange} variant='outlined' label="Number" sx={shortInputStyle} />
                      <Divider orientation="vertical" flexItem />
                      <Typography>Date of Validity</Typography>
                      <TextField  id="outlined-start-adornment" name="CSlicenseDate" onChange={handleChange} type="date" variant='outlined' sx={shortInputStyle}/>
                    </Stack>   
                  </Stack>
                </form>
              </Paper>
            </Dialog>
        </div>
    );
}