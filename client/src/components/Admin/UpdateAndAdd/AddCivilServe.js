import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCivilAdmin, getFacultyData } from '../../../actions/actionsAdmin';

import { useNavigate, useParams  } from 'react-router-dom';
import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide  } from '@mui/material';
import Swal from "sweetalert2";
import 'animate.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {CScareerService: '', CSrating: '', CSdateOfExam: '', CSplaceOfExam: '', CSlicenseNo: '', CSlicenseDate: '', CSlicense: ''};
export default function AddCivilServe (props) {
  const {id} = useParams();
   const {users} = useSelector(state => state.adminData);
   const acc = users.filter(({_id}) => _id === id);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({acc});


 


  


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
  
    Swal.fire({
      icon: 'success',
      title: 'Success Update!',
      allowOutsideClick: true,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    dispatch(updateCivilAdmin(id, edu));
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