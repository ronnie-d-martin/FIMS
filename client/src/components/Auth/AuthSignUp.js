import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { Button, Stack, Typography, Avatar, TextField, FormControlLabel, Link, Checkbox, MenuItem, Alert} from '@mui/material';
import '@fontsource/roboto/300.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { signup  } from '../../actions/actionsAuth';
import Input from './InputSignUp';
import FileBase from 'react-file-base64';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { pink } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import Swal from 'sweetalert2/src/sweetalert2.js';
import 'animate.css';
import PasswordStrengthBar from 'react-password-strength-bar';
import validator from 'validator';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();
const materialDateInput = `${year}-${month}-${date}`;

const sex = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
  {
    value: 'Others',
    label: 'Others',
  },
];
const initialState = { userType: 'faculty', email: '', password: '', confirmPassword: '', employeeNumber: '', firstName: '', 
middleName: '', lastName: '', dateOfBirth: '', age: '', placeOfBirth: '', gender: '', civilStatus: '', picture: '', mobile: '', status: 'unverified'};

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /*Styles*/
    const signUpFormStyle = { paddingTop:2, paddingLeft: 5, width: '350' }
    const signInStyle = { paddingTop: 5, paddingRight: 5, paddingBottom: 2 }
    const inputStyle = { bgcolor: '#ECECEC', borderRadius: 2 }

    /*Navigate*/
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const [passGood, setPassGood] = useState(false);
    
    const [form, setForm] = useState(initialState);
    const [error, setError] = useState('');
    const [eR, setEr] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);
    const [outVal, setOutval] = useState(form.dateOfBirth);
    const handleOnClick = () => {
        setForm(initialState);
        setShowPassword(false);
        navigate('/');
        
    }
    const isCheckBox = () => {
      if(isChecked)
      {
        setIsChecked(false);
      }
      else{
        setIsChecked(true);
      }
      
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validator.isStrongPassword(form.password, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
        
        
      
        if(form.picture=== '')
        { 
          Swal.fire({
            title: 'Missing Profile Picture',
            text: 'Please select a profile picture!',
            allowOutsideClick: true,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        }
        else if(isChecked===false)
        {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Kindly agree with the Terms & Conditions.',
            allowOutsideClick: true,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });     
        }
        else{
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {      
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed up successfully!'
          })
          dispatch(signup(form, navigate));
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Password is weak!',
          html: '- at least one uppercase character <br> - at least one lowercase character <br> - at least one digit/number </br> - at least one special character <br> - minimum 8 characters' ,
          allowOutsideClick: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      }   
    
      };

      const validate = (value) => {
  
        if (validator.isStrongPassword(value, {
          minLength: 8, minLowercase: 1,
          minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
          setPassGood(true)
        } else {
          setPassGood(false)
        }
      }

    
    
      useEffect(() => {
        if (form.dateOfBirth === undefined || form.dateOfBirth === '' ) {
         form.dateOfBirth ='';
         
         }   
         else{
          let bday = new Date(form.dateOfBirth);
          let birthDateday = bday.getDate();
          let birthDatemonth = bday.getMonth();
          let birthDateyear = bday.getFullYear();
      
          let todayDate = new Date();
          let todayDay = todayDate.getDate();
          let todayMonth = todayDate.getMonth();
          let todayYear = todayDate.getFullYear();
            
          let calculatedAge = 0;
      
          if (todayMonth > birthDatemonth) calculatedAge = todayYear - birthDateyear;
          else if (todayMonth === birthDatemonth) {
            if (todayDay >= birthDateday) calculatedAge = todayYear - birthDateyear;
            else calculatedAge = todayYear - birthDateyear - 1;
          } else calculatedAge = todayYear - birthDateyear - 1;
      
         
            const outputvalueAge = calculatedAge;
           
              setOutval(outputvalueAge.toString());
              form.age=outputvalueAge.toString();
             
  
            
            console.log(form.dateOfBirth)
            console.log(form.age)
         }
    },[form.dateOfBirth])
    
      const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return(
        <div className='signUpForm-main'>

            <Stack direction={'row'} justifyContent="flex-start" spacing={2} alignItems='center' sx={signInStyle}> 
                <Button variant="contained" onClick={handleOnClick} sx={{ bgcolor: "#F8049C", margin:1, borderRadius:10 }}>Sign In</Button>
                <Typography variant='body2' sx={{ color: "#14213D", align:'center' }}>If you already have an account.</Typography>  
            </Stack>


            <Stack direction={'column'} spacing={2} sx={signUpFormStyle} justifyContent="center">
                <Typography variant="h3" sx={{ fontWeight:500, color: "#14213D" }}>CREATE ACCOUNT</Typography>
                <Typography variant='body2' sx={{ color: "#14213D", align:'center' }}>Please fill in the following fields.</Typography>
            </Stack>
            
            <form onSubmit={handleSubmit}>
             
            <Stack direction={'row'} spacing={1} sx={signUpFormStyle} justifyContent="center">
            <Avatar variant="square" alt="" src={form.picture} sx={{height:100, width:100, bgcolor: "#F8049C"}}><PersonIcon/></Avatar>
                <Stack direction={'column'} spacing={2} sx={signUpFormStyle} justifyContent="center">     
                     <Typography variant="h5" sx={{ fontWeight:300, color: "#14213D" }}>Choose a Profile Picture</Typography>
                     <FileBase type="file" multiple={false} onDone={({base64}) => setForm({...form, picture: base64})}/>
                </Stack>
                  
            </Stack>

                <Stack direction={'column'} spacing={2} sx={signUpFormStyle} justifyContent="center">
                    
                    <Input id="outlined-required" name="firstName" label="First Name" handleChange={handleChange} autoFocus sx={inputStyle} />
                    <Input id="outlined-required" name="middleName" label="Middle Name" handleChange={handleChange} sx={inputStyle} />
                    <Input id="outlined-required" name="lastName" label="Last Name" handleChange={handleChange} sx={inputStyle} />
                    <Input id="outlined-required" name="email" label="Email Address" handleChange={handleChange} type="email" sx={inputStyle}/>
                    <Input id="outlined-password-input" name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} sx={inputStyle} />
                    <PasswordStrengthBar minLength={4} barColors={["#B83E26","#FFB829","#009200","#009200","#009200","#009200"]} password={form.password} />
                    <Input id="outlined-password-input" name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} sx={inputStyle}/>
                    <Input id="outlined-required" name="employeeNumber" label="Employee Number" handleChange={handleChange} />
                    <Input id="outlined-required" name="dateOfBirth" label="Date of Birth" type="date" handleChange={handleChange} defaultValue={materialDateInput} InputLabelProps={{shrink: true,}} sx={inputStyle} half/>
                    <Input id="outlined-required" name="age" label="Age" value={outVal} handleChange={handleChange} half sx={inputStyle}/>
                    <Input id="outlined-required" name="placeOfBirth" label="Place of Birth" handleChange={handleChange} sx={inputStyle}/>
                    <TextField id="outlined-required" required variant="outlined" select name="gender" label="Gender" onChange={handleChange} value={form.gender} fullWidth sx={inputStyle}> 
                    {sex.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))} 
                    </TextField>                                   
                    <Input id="outlined-required" name="civilStatus" label="Civil Status" handleChange={handleChange} sx={inputStyle} />
                    <Input id="outlined-required" name="mobile" label="Mobile Number" handleChange={handleChange} sx={inputStyle} />  

                    <Stack direction={'row'} justifyContent="flex-start" alignItems='center' spacing={0}> 
                        <FormControlLabel variant="body2"
                            control = {
                            <Checkbox
                                name="checkedB"
                                color="primary"
                                checked={isChecked}
                                onChange={isCheckBox}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                            />
                            }
                            label=""
                        />   
                         <Typography> I accept the</Typography> <Typography onClick={handleClickOpen} sx={{ color:'blue', cursor:'pointer'}}> terms and conditions</Typography>
                    </Stack> 

                    <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                    >
        
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Terms and Conditions
                    </BootstrapDialogTitle>
                    
                    <DialogContent dividers>
                    <Typography gutterBottom variant="h3">
                    Privacy Policy
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                    Last updated: May 15, 2022
                    </Typography>
                    <Typography gutterBottom variant="subtitle1" >
                    This Privacy Policy describes Our policies and procedures on the collection, 
                    use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                    This Privacy Policy describes Our policies and procedures on the collection, 
                    use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                    We use Your Personal data to provide and improve the Service. By using the Service, 
                    You agree to the collection and use of information in accordance with this Privacy Policy.
                    This Privacy Policy has been created with the help of the Privacy Policy Generator.
                    </Typography>
                    <Typography gutterBottom variant="h3">
                    Collecting and Using Your Personal Data
                    </Typography>
                    <Typography gutterBottom variant="h4">
                    Types of Data Collected
                    </Typography>
                    <Typography gutterBottom variant="h5">
                    Personal Data
                    </Typography>
                    <Typography gutterBottom variant="subtitle1">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. 
                    Personally identifiable information may include, but is not limited to:
                    </Typography>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.freeprivacypolicy.com/live/1d9e5a7a-3cd4-4d7f-adf5-76ead43302ce" underline="hover">
                    Please open this link to read about more about terms & conditions.
                    </Link>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Close
                        </Button>
                    </DialogActions>
                    </BootstrapDialog>

                    <div align="right">
                        <Button type="submit" variant="contained" endIcon={<CheckCircleIcon />} sx={{ bgcolor: "#FD9D4F", margin:1, borderRadius:10, width:150, marginBottom:5 }}>Sign Me Up</Button>  
                    </div>

                    <Alert severity="success">Please wait until we verify your account. Thank you!</Alert>
                </Stack>

            </form>
    </div>
    );
};

export default SignUp;