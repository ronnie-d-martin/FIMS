import React, {useState} from 'react';
import { Container, Grid, Paper, Typography, Avatar } from '@mui/material';

const facultyData = () => {
    const user = JSON.parse(localStorage.getItem('profile'));


    return (
        <div>
             <Typography variant="h3" sx={{ fontWeight:500, color: 'black' }}>Profile</Typography>
             <div>
                <Container>
                    <Paper elevation={6} sx={{ flexDirection: 'column', display: 'flex', width: 800, padding: 8}}> 
                        <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Basic Information</Typography>
                        <Avatar alt={user?.result.name} src={user?.result.picture} sx={{ width: 300, height: 300 }}/>
                         &nbsp;
                            <Grid container spacing={2} justify="flex-end">
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Name: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.firstName + ' ' + user?.result.middleName + ' ' +user?.result.lastName}</Typography>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Email: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.email}</Typography>
                             
                            </Grid>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Grid container spacing={2} justify="flex-end">
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Employee Number: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.employeeNumber}</Typography>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Date of Birth: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.dateOfBirth}</Typography>
                            </Grid>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Grid container spacing={2} justify="flex-end">
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Age: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.age}</Typography>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Place of Birth: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.placeOfBirth}</Typography>
                            </Grid>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <Grid container spacing={2} justify="flex-end">
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Gender: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.gender}</Typography>
                                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                <Typography variant="h5" sx={{ fontWeight:500, color: 'black' }}>Civil Status: </Typography>
                                <Typography variant="h6" sx={{ fontWeight:300, color: 'black' }}>{user?.result.civilStatus}</Typography>
                            </Grid>
                            
                                
                    </Paper>
                 </Container>                                  
             </div>
        </div>
    );
};

export default facultyData;