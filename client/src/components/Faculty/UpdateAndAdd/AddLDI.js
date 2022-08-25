import * as React from 'react';
import { Paper, Stack, TextField, Button, Dialog, Divider, AppBar, Toolbar, Typography, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';


        /**For Dialog */
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        /**For Upload File */
        const Input = styled('input')({
            display: 'none',
        });


export default function AddLDI (props) {

    const [open, setOpen] = React.useState(false);

    /**For Dialog */
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    /**For Styles */
    const addButtonStyle = { height:45, width:100, bgcolor:'green', borderRadius:10 }
    const saveButtonStyle = { width:100, bgcolor:'#26324B', borderRadius:10, color:'white' }
    const cancelButtonStyle = { width:100, margin:1, bgcolor:'#26324B', borderRadius:10, color:'white' }
    const paperStyle ={ margin:10, padding:5 }
    const longInputStyle = { borderRadius: 2 }
    const shortInputStyle = { width:250, borderRadius: 2 }


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
                            <TextField fullWidth id="outlined-required" variant='outlined' label="Title of learning and development interventions/training programs (write in full)" sx={longInputStyle}/>
                            <TextField id="outlined-required" variant='outlined' label="Type" sx={shortInputStyle} />
                            <Divider textAlign='center'>Inclusive Date of Attendance</Divider>
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                            <Typography>From</Typography>
                            <TextField  id="outlined-start-adornment" type="date" variant='outlined' sx={shortInputStyle}/>
                            <Typography>To</Typography>
                            <TextField  id="outlined-start-adornment" type="date" variant='outlined' sx={shortInputStyle}/>
                            <Divider orientation="vertical" flexItem />
                            <TextField id="outlined-required" variant='outlined' label="Year Graduated " sx={shortInputStyle} />
                        </Stack>
                        <Divider/>
                        <Stack direction='row' justifyContent='center' alignItems='center' spacing={2}>
                            <TextField id="outlined-required" variant='outlined' label="Number of hours" sx={shortInputStyle} />
                            <Divider orientation="vertical" flexItem />
                            <TextField id="outlined-required" variant='outlined' label="Type of LD" sx={shortInputStyle} />
                        </Stack>
                            <TextField fullWidth id="outlined-required" variant='outlined' label="Conducted/ sponsored by (Write in full)" sx={longInputStyle}/>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/pdf/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span">Upload Certiificate</Button>
                            </label>
                        </Stack>
                    </form>
                </Paper>
            </Dialog>
        </div>
    );
}