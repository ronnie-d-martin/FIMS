import React, { useState, useEffect } from 'react';
import { Paper, Stack, Typography, TextField, Button } from "@mui/material";
import '@fontsource/roboto/500.css';
import { Avatar } from "@mui/material";
import ChangeEmail from "./ChangeEmail";
import ChangePass from "./ChangePass";
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { updateImage, deleteMe }from '../../actions/actionsFaculty';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getFaculty }from '../../actions/actionsFaculty';
import Swal from "sweetalert2";
import 'animate.css';
export default function Account () {
     const [userE, setuserE] = useState(JSON.parse(localStorage.getItem('profile')));
    const [data, setData] = useState({picture: ''});
    const [pict, setPic] = useState(userE?.result.picture);
    const dispatch = useDispatch();
    const [postData, setPostData] = useState([]);
   
    const navigate = useNavigate

    const {user, isLoading} = useSelector((state) => state.facultyData.user);
    const addButtonStyle = { height:45, width:180, bgcolor:'red', borderRadius:10 }
    const asaveButtonStyle = { height:45, width:180, bgcolor:'blue', borderRadius:10 }
    useEffect(() => {
      dispatch(getFaculty(userE?.result._id));
  
  
    }, [dispatch])


    useEffect (() => {
        if(user)
        {
          setPostData([{...user}]);
        }
        return () => setPostData([{...user}]);
    },[user]);
  
  
    const avatarStyle = { height:250, width:250}

    
 

    const handleSubmit = async (e) => { 
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({

        })
        
        swalWithBootstrapButtons.fire({
          title: 'Are you sure you want to change profile picture?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes!',
          cancelButtonText: 'No!',
          
        }).then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              'Profile Picture Changed!',
              'Your picture has been changed.',
              'success',
              dispatch(updateImage(userE?.result._id, data)),
              window.location.reload(),
              e.preventDefault(),
            )
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              'Cancelled',
              'Change aborted!',
              'error'
            )
          }
        })
     
        
        
      };

      const handleDelete = async (e) => { 
        e.preventDefault();

        const swalWithBootstrapButtons = Swal.mixin({

          })
          
          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your account has been deleted.',
                'success',
                dispatch(deleteMe(userE?.result._id, navigate)),
                setuserE(null)
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Deletion aborted!',
                'error'
              )
            }
          })

   
        
        
        
      };


    return (
        <> 
        {postData.map((data, key) => ( 
            <Paper key={key} alignitems='center' sx={{ flexGrow:1, width:'80%', height:'250', margin:5, padding:5 }}>
                
                 <Stack direction='row' justifyContent='center' alignitems='center' spacing={4} sx={{ flexGrow:1}}>
                <Typography variant="h1" sx={{fontWeight:500 }}>My Account</Typography>
                </Stack>

                <Stack direction='row' justifyContent='center' alignitems='center' spacing={4} sx={{ flexGrow:1, padding:2 }}>
                <Stack direction='column' justifyContent='center' alignitems='center' spacing={4} sx={{ flexGrow:1, padding:2 }}>
                <Avatar align="center" alt={data.picture} src={data.picture} sx={avatarStyle} />
                <Typography variant="h5" sx={{ fontWeight:300, color: "#14213D" }}>Choose a Profile Picture</Typography>
                <FileBase type="file" multiple={false} onDone={({base64}) => setData({...data, picture: base64})}/>
                <Button variant="contained" sx={asaveButtonStyle} onClick={handleSubmit}> Save </Button>
                </Stack>
                
                <Stack direction='column' justifyContent='center' alignitems='flex-start' spacing={5} sx={{ flexGrow:1, padding:10 }}>
                    <Stack direction='row' spacing={2}>
                    <TextField
                        id="outlined-read-only-input"
                        label="First Name"
                        value={data.firstName}
                        
                        InputProps={{
                        readOnly: true,
                        }}
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Last Name"
                        value={data.lastName}
                        
                        InputProps={{
                        readOnly: true,
                        }}
                    />
                    </Stack>
                    <Stack direction='row' spacing={2} alignitems='center'>
                    <TextField
                        id="outlined-read-only-input"
                        label="Email Address"
                         value={data.email}
                        
                        InputProps={{
                        readOnly: true,
                        }}
                    />
                        <ChangeEmail />
                    </Stack>
                    <Stack direction='row' spacing={2} alignitems='center'>
                    <TextField
                        id="outlined-read-only-input"
                        label="Password"
                        type="password"
                        value={data.password}
                        InputProps={{
                        readOnly: true,
                        }}
                    />
                        <ChangePass />
                        </Stack>
                        <Button alignitems='flex-end' variant="contained" sx={addButtonStyle} onClick={handleDelete}> DELETE ACCOUNT </Button>
                    </Stack>
                </Stack>
               
            </Paper>
             ) )}
             </>
    );
}