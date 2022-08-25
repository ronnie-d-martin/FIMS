import React from 'react';
import { Typography, Grid } from "@mui/material";

export default function DataDisplay (props) {

    const labelStyle = { fontWeight:500, bgcolor:'#ECECEC', padding:0.5 }

    const dataStyle = { fontWeight:300 }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Typography sx={labelStyle}>{props.label}:</Typography>
            </Grid>
            <Grid item xs={9}>
                <Typography sx={dataStyle}>{props.data}</Typography>
            </Grid>
        </Grid>
    )
}