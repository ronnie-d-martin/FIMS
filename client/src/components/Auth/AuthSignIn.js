import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FileBase from 'react-file-base64';
import {signin, signinAdmin} from '../../actions/actionsAuth';
import { AUTH } from '../../constants/actionTypes';
import Input from './InputSignIn';
import { Button, Stack, Typography, FormControlLabel, Checkbox, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import '@fontsource/roboto/300.css';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import { pink } from '@mui/material/colors';
import Swal from "sweetalert2";
import 'animate.css';

import { getEmail } from '../../actions/actionsFaculty';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SignIn = () => {
  const initialState = { email: '', password: ''};
  const initialState2 = { email: "This field is required!", password: "This field is required!"};
  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const signInFormStyle = { paddingTop:2, paddingRight: 17, width: 330 }

  const signUpStyle = { paddingTop: 5, paddingRight: 5, paddingBottom: 5 }

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [error, setError] = useState({email: ''});
  const [error2, setError2] = useState({password: ''});
  const [isTrue, setTrue] = useState(true);
  const authData = useSelector((state) => state.auth);




  const switchMode = () => {
    setForm(initialState);
    setShowPassword(false);
    navigate('/signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(form.email === "" && form.password === "")
    {
      setError({...error, email: "This field is required!"})
      setError2({...error2, password: "This field is required!"})
      setOpen(true)
      setOpen2(true)
     
    }
    else if(form.email !== "" && form.password === "" )
    {
      setError2({...error2, password: "This field is required!"})
        setOpen2(true)
        setOpen(false)
        setError({email: ''})
    }
    else if(form.email === "" && form.password !== "" )
    {
      setError({...error, email: "This field is required!"})
      setOpen(true)
      setOpen2(false)
      setError2({password: ''})
    }
    else
    {
      setOpen(false)
      setOpen2(false)
      setError({email: ''})
      setError2({password: ''})
   
      if (form.email === 'fmsdb2022@gmail.com')
      {
        dispatch(signinAdmin(form, navigate));
      }else{
        dispatch(signin(form, navigate));
      }

    }
      
    
  };

  const handleForgotPass = () => {
    navigate('/forgotpass')
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (

    <div className='signInForm-main'>
            <Stack direction={'row'} justifyContent="flex-end" spacing={2} alignItems='center' sx={signUpStyle}> 
                    <Typography variant='body2' sx={{ color: 'white', align:'center' }}>Need an account?</Typography>
                    <Button variant='contained' onClick={switchMode} sx={{ bgcolor: "#FD9D4F", margin:1, borderRadius:10 }}>Sign Up</Button>  
            </Stack>
            <Stack direction={'column'} spacing={2} sx={signInFormStyle} justifyContent="center">
                <Typography variant="h3" sx={{ fontWeight:500, color: 'white' }}>WELCOME BACK!</Typography>
               
                <Input id="filled-required"  helperText={error.email} error={open} name="email" label="Email Address" handleChange={handleChange} type="email" sx={{ bgcolor: 'white', borderRadius: 2 }}/>
                
                <Input id="filled-password-input" helperText={error2.password} error={open2} name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} sx={{ bgcolor: 'white', borderRadius: 2  }} />
                <Stack direction={'row'} justifyContent="space-between" alignItems='center'> 
                            <FormControlLabel variant="body2"
                                control = {
                                <Checkbox
                                    name="checkedB"
                                    sx={{
                                      color: pink['A200'],
                                      '&.Mui-checked': {
                                        color: pink['A200'],
                                      },
                                    }}
                                />
                                }
                                label="Remember Me"
                                sx={{ color: pink.A200 }}
                            />   
                
                            <Typography variant='body2' onClick={handleForgotPass} sx={{ color: pink.A200, '&:hover': {cursor: 'pointer'}  }}>Forgot Password?</Typography>
                </Stack> 
                <div align="center">
                    <Button variant="contained" onClick={handleSubmit} endIcon={<KeyOutlinedIcon />} sx={{ bgcolor: "#FF4081", margin:1, borderRadius:10, width:150 }}> {'Sign In'}</Button>  
                </div>
            </Stack>
        </div>
  );
};

export default SignIn;

//const googleError = () => alert('Google Sign In was unsuccessful. Try again later');*/
 /*const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

/*     <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */

          /* <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <FileBase type="file" multiple={false} onDone={({base64}) => setForm({...form, picture: base64})}/>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input id="password" name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && (
                <>
                  <Input id="password" name="confirmPassword" label="Confirm Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>  
                  <Input name="employeeNumber" label="Employee Number" handleChange={handleChange} />
                  <Input name="dateOfBirth" label="Date of Birth" type="date" handleChange={handleChange} defaultValue={materialDateInput} InputLabelProps={{shrink: true,}} half/>
                  <Input name="age" label="Age" handleChange={handleChange}  half/>
              
                  <Input name="placeOfBirth" label="Place of Birth" handleChange={handleChange}/> 
                  <Grid item xs={12} sm={6}>
                  <TextField required variant="outlined" select name="gender" label="Gender" onChange={handleChange} value={form.gender} fullWidth> 
                    {sex.map((option) => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))} 
                  </TextField> 
                  </Grid>                  
                  <Input name="civilStatus" label="Civil Status" handleChange={handleChange} half/>  

                </>
                
              )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
        
            
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>*/