import React, {useState, useEffect} from 'react';
import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { updateLLAdmin, getFacultyData } from '../../../actions/actionsAdmin';
import { getFaculty }from '../../../actions/actionsFaculty';
import Swal from "sweetalert2";
import 'animate.css';
import { useNavigate, useParams  } from 'react-router-dom';
        /**For Dialog */
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        /**For Upload File */
        const Input = styled('input')({
            display: 'none',
        });

        const initialState = {LLtitle: '', LLtype: '', LLfrom: '', LLto: '', LLnumOfHours: '', LLtypeOfLD: '', LLconducted: '',
            LLcertificate: ''};
export default function AddLDI (props) {

    const [open, setOpen] = React.useState(false);
    const {id} = useParams();
    const {users} = useSelector(state => state.adminData);
    const acc = users.filter(({_id}) => _id === id);

   const dispatch = useDispatch();
   const [edu, setEdu] = useState({acc});
  
  

    /**For Dialog */
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
       dispatch(updateLLAdmin(id, edu));
        console.log(edu)
        window.location.reload();
        
        
      };

    /**For Styles */
    const addButtonStyle = { height:45, width:100, bgcolor:'green', borderRadius:10 }
    const saveButtonStyle = { width:100, bgcolor:'#26324B', borderRadius:10, color:'white' }
    const cancelButtonStyle = { width:100, margin:1, bgcolor:'#26324B', borderRadius:10, color:'white' }
    const paperStyle ={ margin:10, padding:5 }
    const longInputStyle = { borderRadius: 2 }
    const shortInputStyle = { width:250, borderRadius: 2 }
    const handleChange = (e) => setEdu({ ...edu, [e.target.name]: e.target.value });

    return (
        <div>
            <Button variant="contained" sx={addButtonStyle} onClick={handleClickOpen}>Add</Button>

            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >

                <AppBar sx={{ bgcolor:'#14213D', position:'fixed'  }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">Add {props.title}</Typography>
                        <Button autoFocus ariant="outlined" sx={cancelButtonStyle} onClick={handleClose}>Cancel</Button>
                        <Button autoFocus sx={saveButtonStyle} onClick={handleClose}>Save</Button>
                    </Toolbar>
                </AppBar>


                <Paper sx={paperStyle}>
                    <form>
                        <Stack direction='column' spacing={3} justifyContent='center' alignItems='center'>
                            <TextField fullWidth id="outlined-required" name="LLtitle" variant='outlined' label="Title of learning and development interventions/training programs (write in full)" sx={longInputStyle}/>
                            <TextField id="outlined-required" variant='outlined' name="LLtype" label="Type" sx={shortInputStyle} />
                            <Divider textAlign='center'>Inclusive Date of Attendance</Divider>
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                            <Typography>From</Typography>
                            <TextField  id="outlined-start-adornment" name="LLfrom" type="date" variant='outlined' sx={shortInputStyle}/>
                            <Typography>To</Typography>
                            <TextField  id="outlined-start-adornment" name="LLto"type="date" variant='outlined' sx={shortInputStyle}/>
                            <Divider orientation="vertical" flexItem />
                            <TextField id="outlined-required" variant='outlined' label="Year Graduated " sx={shortInputStyle} />
                        </Stack>
                        <Divider/>
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                            <TextField id="outlined-required" variant='outlined' name="LLnumOfHours" label="Number of hours" sx={shortInputStyle} />
                            <Divider orientation="vertical" flexItem />
                            <TextField id="outlined-required" variant='outlined' name="LLtypeOfLD" label="Type of LD" sx={shortInputStyle} />
                        </Stack>
                            <TextField fullWidth id="outlined-required" name="LLconducted" variant='outlined' label="Conducted/ sponsored by (Write in full)" sx={longInputStyle}/>
                               
                     <Typography variant="h5" sx={{ fontWeight:300, color: "#14213D" }}>Upload certificate</Typography>
                     <FileBase type="file" multiple={false} name="LLcertificate" onDone={({base64}) => setEdu({...edu, LLcertificate: base64})}/>
                
                        </Stack>
                    </form>
                </Paper>
            </Dialog>
        </div>
    );
}