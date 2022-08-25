import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const Input = ({ id, name, handleChange, label, half, autoFocus, type, handleShowPassword, defaultValue, value, sx, error, helperText }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      id={id}
      name={name}
      error={error}
      required
      helperText={helperText}
      onChange={handleChange}
      variant="filled"
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
      defaultValue={defaultValue}
      value={value} 
      sx={sx}
    />
  </Grid>
);

export default Input;
