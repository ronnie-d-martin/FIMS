import { updateEmail } from '../../actions/actionsFaculty';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import React, {useState, useEffect} from 'react';
import { Button, Paper, TextField } from "@mui/material";
import '@fontsource/roboto/500.css';
import { useDispatch, useSelector } from 'react-redux';


const initialState = {email: ''};
export default function ChangeEmail () {

  const [open, setOpen] = React.useState(false);
  const [postData, setPostData] = useState(initialState);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const handleChangeEmail = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setOpen(false);
  console.log(user?.result._id, postData)
    dispatch(updateEmail(user?.result._id, postData));
    window.location.reload();
    
  };

  const handleChange = (e) => setPostData({ ...postData, [e.target.name]: e.target.value });
    return (
        <Paper>
            <Button variant="outlined" onClick={handleChangeEmail}>Change Email</Button>
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Change Email</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                    Enter the new email that you wanted to use. Thank you!
                                    </DialogContentText>
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    name="email"
                                    defaultValue={user?.result.email}
                                    onChange={handleChange}                         
                                    label="Email Address"
                                    type="email"
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