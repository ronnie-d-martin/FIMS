import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateWeAdmin, getFacultyData } from '../../../actions/actionsAdmin';

import { useNavigate, useParams  } from 'react-router-dom';

import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide  } from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Swal from "sweetalert2";
import 'animate.css';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const initialState = {WEfrom: '', WEto: '', WEposition: '', WEdepartment: '', WEmonthlySalary: '', WEslp: '', WEstatusOfAppointment: '', WEgov: ''};
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
   dispatch(updateWeAdmin(id, edu));
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
                    <Divider textAlign='center'>Inclusive Dates</Divider>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                      <Typography>From</Typography>
                      <TextField  id="outlined-start-adornment" name="WEfrom" onChange={handleChange} type="date" variant='outlined' sx={shortInputStyle}/>
                      <Typography>To</Typography>
                      <TextField  id="outlined-start-adornment" name="WEto" onChange={handleChange} type="date" variant='outlined' sx={shortInputStyle}/>
                    </Stack>
                    <TextField fullWidth id="outlined-required" name="WEposition" onChange={handleChange} variant='outlined' label="Position Title (write in full/do not abbreviate)" sx={longInputStyle}/>
                    <TextField fullWidth id="outlined-required" name="WEdepartment" onChange={handleChange} variant='outlined' label="Department/Agency/Office/Company (write in full/do not abbreviate)" sx={longInputStyle}/>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                      <TextField id="outlined-required" variant='outlined' name="WEmonthlySalary" onChange={handleChange} label="Monthly Salary" sx={shortInputStyle} />
                      <Divider orientation="vertical" flexItem />
                      <TextField fullWidth id="outlined-required" name="WEslp" onChange={handleChange} variant='outlined' label="Salary/Job/Pay Grade (if applicable)"/>
                    </Stack>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                      <TextField id="outlined-required" variant='outlined' name="WEstatusOfAppointment" onChange={handleChange} label="Status of Appointment" sx={shortInputStyle} />
                      <Divider orientation="vertical" flexItem />
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gov't service</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="yes" name="CScareerService" onChange={handleChange} control={<Radio />} label="Yes" />
                                <FormControlLabel value="no" name="WEgov" onChange={handleChange} control={<Radio />} label="No" />
                            </RadioGroup>
                      </FormControl>
                    </Stack>
                  </Stack>
                </form>
              </Paper>
            </Dialog>
        </div>
    );
}