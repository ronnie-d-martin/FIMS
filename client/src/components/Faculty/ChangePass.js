import React, {useState, useEffect} from 'react';
import { Button, Paper, TextField } from "@mui/material";
import '@fontsource/roboto/500.css';
import { updatePassword } from '../../actions/actionsFaculty';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const initialState = {confirmPassword: '', currentPassword: '', password: '', email: ''};
export default function ChangePass () {

  const [open, setOpen] = React.useState(false);
  const [pass, setPass] = useState(initialState);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleChangeEmail = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const handleSubmit = async (e) => { 
  
    setOpen(false);
    pass.email = user?.result.email;
    console.log(pass)
    dispatch(updatePassword(user?.result._id, pass));
    window.location.reload();
    
  };

  const handleChange = (e) => setPass({ ...pass, [e.target.name]: e.target.value });

    return (
        <Paper>
            <Button variant="outlined" onClick={handleChangeEmail}>Change Password</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Change Password</DialogTitle>
                                <DialogContent>
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    onChange={handleChange}
                                    name="currentPassword"
                                    label="Current Password"
                                    type="password"                           
                                    fullWidth
                                    variant="standard"
                                    />
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    onChange={handleChange}
                                    label="New Password"
                                    name="password"                               
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                    />
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    onChange={handleChange}
                                    name="confirmPassword"
                                    label="Confirm New Password"                             
                                    type="password"
                                    fullWidth
                                    variant="standard"
                                    />
                                </DialogContent>
                                <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleSubmit}>Save</Button>
                                </DialogActions>
                        </Dialog>
        </Paper>
                    
    );
}