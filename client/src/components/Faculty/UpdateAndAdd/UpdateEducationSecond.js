import React, {useState, useEffect} from 'react';
import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updateEduc } from '../../../actions/actionsFaculty';
import { getFaculty }from '../../../actions/actionsFaculty';
import Swal from "sweetalert2";
import 'animate.css';
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const initialState = {snameOfSchool: '', sfrom: '', sto: '', sbasicEducDegreeCourse: '', shighestLevelUnits: '', syearGraduate: '', sscholarshipAcademicHonors: '', seduc: ''  };
export default function UpdateEducationSecond (props) {

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
  const paperStyle ={ margin:10, padding:5 }
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
  
    dispatch(updateEduc(userE?.result._id, edu));
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
                  <Stack direction='column' spacing={3} justifyContent='center'>
                    <Divider textAlign='center'>{props.category}</Divider>
                      <TextField fullWidth id="outlined-required" variant='outlined' onChange={handleChange} name="snameOfSchool" label="Name of School" sx={longInputStyle}/>
                      <TextField fullWidth id="outlined-required" variant='outlined' onChange={handleChange} name="sbasicEducDegreeCourse" label="Basic Education/Degree/Course" sx={longInputStyle}/>
                    <Divider textAlign='center'>Period of Attendance</Divider>
                  <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                    <Typography>From</Typography>
                    <TextField  id="outlined-start-adornment" onChange={handleChange} name="sfrom"  type="date" variant='outlined' sx={shortInputStyle}/>
                    <Typography>To</Typography>
                    <TextField  id="outlined-start-adornment" type="date" onChange={handleChange} name="sto" variant='outlined' sx={shortInputStyle}/>
                    <Divider orientation="vertical" flexItem />
                    <TextField id="outlined-required" variant='outlined' onChange={handleChange} name="syearGraduate" label="Year Graduated " sx={shortInputStyle} />
                  </Stack>
                  <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                    <Typography>If not graduated</Typography>
                    <TextField id="outlined-required" variant='outlined' onChange={handleChange} name="shighestLevelUnits" label="Highest Level/Units Earned " sx={shortInputStyle} />
                  </Stack>
                  <TextField fullWidth id="outlined-required" variant='outlined' onChange={handleChange} name="sscholarshipAcademicHonors" label="Scholarship/Academic Honors Received" sx={longInputStyle}/>
                </Stack>
              </form>
            </Paper>
          </Dialog>
        </div>
    );
}