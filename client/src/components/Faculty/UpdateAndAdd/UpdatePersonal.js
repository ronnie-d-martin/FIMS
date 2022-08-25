import React, {useState, useEffect} from 'react';
import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { updatePersonal } from '../../../actions/actionsFaculty';
import { getFaculty }from '../../../actions/actionsFaculty';
import Swal from "sweetalert2";
import 'animate.css';
    /**For Dialog */
    const Transition = React.forwardRef(function Transition(props, ref) {
      return <Slide direction="up" ref={ref} {...props} />;
    });

    /**For Upload */
    const Input = styled('input')({
      display: 'none',
    });
    
    
    const initialState = {firstName: '', middleName: '', nameExtension: '', lastName: '', dateOfBirth: '', age: '', placeOfBirth: '', gender: '', civilStatus: '', picture: '', mobile: '',
    weight: '', height: '', bloodType: '', altEmail: '', telephone: '', citizenship: '', rHouseBlockNo: '', rStreet: '', rSubdivisionVillage: '',
    rBarangay: '', pCityMunicipality: '', rProvince: '', rZipCode: '', pHouseBlockNo: '', pStreet: '', pSubdivisionVillage: '',
    pBarangay: '', pCityMunicipality: '', pProvince: '', pZipCode: '', gsisId: '', pagIbig: '', philHealthId: '', sss: '', tin: '' };

 const UpdatePersonal= (props) =>  {
   const {id} = useParams();
  
  
  const [postData, setPostData] = useState(initialState);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userE = JSON.parse(localStorage.getItem('profile'));
  
  const {users} = useSelector((state) => state.facultyData);

  
  useEffect(() => {
    dispatch(getFaculty(userE?.result._id));
  }, []);

  useEffect(() => {
    if(users){
      setPostData({...users});
    }
  }, [users]);


    

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
    dispatch(updatePersonal(userE?.result._id, postData));
    window.location.reload();
   
    
  };

  const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value });
  /**For Styles */
  const updateButtonStyle = { height:45, width:100, bgcolor:'#FD9D4F', borderRadius:10 }
  const saveButtonStyle = { width:100, bgcolor:'#26324B', borderRadius:10, color:'white' }
  const cancelButtonStyle = { width:100, margin:1, bgcolor:'#26324B', borderRadius:10, color:'white' }
  const paperStyle ={ margin:10, padding:5 }
  const longInputStyle = { width:400, borderRadius: 2 }
  const shortInputStyle = { width:200, borderRadius: 2 }

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
              <Divider />
              <Stack direction='row' justifyContent='center'spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='firstName' label="First Name" sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='middleName' label="Middle Initial" sx={shortInputStyle} />
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='lastName' label="Last Name" sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='nameExtension' label="Name Extension" sx={shortInputStyle}/>
              </Stack>
              <Divider justifyContent='center' textAlign="center">Birthday</Divider>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField  id="outlined-start-adornment" type="date" name ='dateOfBirth' variant='outlined' sx={longInputStyle}/>
                <TextField  id="outlined-read-only-input" label="Age" onChange={handleChange} name ='age' variant='outlined' InputProps={{readOnly: true,}} sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='placeOfBirth' label="Place of Birth" sx={longInputStyle}/>
              </Stack>
              <Divider/>
              <Stack justifyContent='center' direction='row' spacing={1}>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    value={postData.gender}             
                    onChange={(e) => setPostData({ ...postData, gender: e.target.value })}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    defaultValue={postData.gender}         
                  >
                   
                  <FormControlLabel value="Female" name="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Male" name="male"control={<Radio />} label="Male" />
                  <FormControlLabel value="Others" name="other" control={<Radio />} label="Others" />
                  </RadioGroup>
              </FormControl>
              
              
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Civil Status</FormLabel>
                    <RadioGroup
                      row
                      value={postData.civilStatus}             
                      onChange={(e) => setPostData({ ...postData, civilStatus: e.target.value })}
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="civilStatus"
                      defaultValue={postData.civilStatus}
                    >
                    <FormControlLabel value="Single" control={<Radio />} label="Single" />
                    <FormControlLabel value="Married" control={<Radio />} label="Married" />
                    <FormControlLabel value="Divorced" control={<Radio />} label="Divorced" />
                    <FormControlLabel value="Widowed" control={<Radio />} label="Widowed" />
                    </RadioGroup>
                </FormControl>
              <Divider/>
              </Stack>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='bloodType' label="Blood Type" sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='height' label="Height" sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='weight' label="Weight" sx={shortInputStyle}/>
              </Stack>
              <Divider/>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='telephone' label="Telephone No." sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='mobile' label="Mobile No." sx={longInputStyle}/>
              </Stack>
              <Divider/>
              <Stack justifyContent='center' direction='row' spacing={1}>
      
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='citizenship' label="Citizenship" sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='altEmail' label="Alternative Email Address" sx={longInputStyle}/>
              </Stack>
              <Divider textAlign="center">Resident Address</Divider>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='rHouseBlockNo' label="House/Block/Lot No."  sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='rStreet' label="Street" sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='rSubdivisionVillage'label="Subdivision/Village" sx={longInputStyle}/>
              </Stack>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange}name ='rCityMunicipality' label="City/Municipality" sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange}name ='rProvince' label="Province" sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='rZipcCde' label="Zip Code" sx={shortInputStyle}/>
              </Stack>
              <Divider textAlign="center">Permanent Address</Divider>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined'  onChange={handleChange} name ='pHouseBlockNo' label="House/Block/Lot No." sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='pStreet' label="Street" sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='pSubdivisionVillage' label="Subdivision/Village" sx={longInputStyle}/>
              </Stack>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='pCityMunicipality' label="City/Municipality" sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='pProvince' label="Province" sx={longInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange }name ='pZipCode' sx={shortInputStyle}/>
              </Stack>
              <Divider />
              <Stack justifyContent='center' direction='row' spacing={1}>
                
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='gsisId' label="GSIS ID No." sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='pagIbig' label="PAG-IBIG ID No." sx={shortInputStyle}/>
              </Stack>
              <Stack justifyContent='center' direction='row' spacing={1}>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='philHealthId' label="PHILHEALTH No." sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='sss' label="SSS No." sx={shortInputStyle}/>
                <TextField id="outlined-required" variant='outlined' onChange={handleChange} name ='tin' label="TIN No." sx={shortInputStyle}/>
              </Stack>
              
            </Stack>
          </form>
        </Paper>
      </Dialog>
    </div>
  );
}

export default UpdatePersonal;
