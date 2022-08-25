import React, { useState, useEffect } from "react";
import {
  Paper,
  Stack,
  TextField,
  Button,
  Dialog,
  Divider,
  AppBar,
  Toolbar,
  Typography,
  Slide,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { AddUser, getFacultyData } from "../../../actions/actionsAdmin";
import Swal from "sweetalert2";
import "animate.css";
import FileBase from "react-file-base64";

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
/**For Dialog */
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

/**For Upload */
const Input = styled("input")({
  display: "none",
});

const initialState = {
  userType: "faculty",
  email: "",
  password: "",
  employeeNumber: "",
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  age: "",
  placeOfBirth: "",
  gender: "",
  civilStatus: "",
  picture: "",
  mobile: "",
  status: "verified",
};

const UpdatePersonal = (props) => {
  const [postData, setPostData] = useState(initialState);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [outVal, setOutval] = useState(postData.dateOfBirth);

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

    if(postData.email === "" || postData.password === "" || postData.employeeNumber === "" || postData.firstName === "" || postData.lastName === ""
    || postData.dateOfBirth === "" || postData.placeOfBirth === "" || postData.gender === "" || postData.age === "" || postData.civilStatus === "" || postData.mobile === ""
    || postData.picture === ""){
      Swal.fire({
        icon: "error",
        title: "Something went!",
        allowOutsideClick: true,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else if(postData) {
      Swal.fire({
        icon: "success",
        title: "Success Update!",
        allowOutsideClick: true,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });

      dispatch(AddUser(postData));
      window.location.reload();
    }
    console.log(postData);
  };

  useEffect(() => {
    if (postData.dateOfBirth === undefined || postData.dateOfBirth === "") {
      postData.dateOfBirth = "";
    } else {
      let bday = new Date(postData.dateOfBirth);
      let birthDateday = bday.getDate();
      let birthDatemonth = bday.getMonth();
      let birthDateyear = bday.getFullYear();

      let todayDate = new Date();
      let todayDay = todayDate.getDate();
      let todayMonth = todayDate.getMonth();
      let todayYear = todayDate.getFullYear();

      let calculatedAge = 0;

      if (todayMonth > birthDatemonth)
        calculatedAge = todayYear - birthDateyear;
      else if (todayMonth === birthDatemonth) {
        if (todayDay >= birthDateday) calculatedAge = todayYear - birthDateyear;
        else calculatedAge = todayYear - birthDateyear - 1;
      } else calculatedAge = todayYear - birthDateyear - 1;

      const outputvalueAge = calculatedAge;

      setOutval(outputvalueAge.toString());
      postData.age = outputvalueAge.toString();
      console.log(postData.gender);
    }
  }, [postData.dateOfBirth]);

  const handleChange = (e) =>
    setPostData({ ...postData, [e.target.name]: e.target.value });
  /**For Styles */
  const addButtonStyle = {
    height: 55,
    width: 100,
    bgcolor: "green",
    borderRadius: 10,
  };
  const saveButtonStyle = {
    width: 100,
    bgcolor: "#26324B",
    borderRadius: 10,
    color: "white",
  };
  const cancelButtonStyle = {
    width: 100,
    margin: 1,
    bgcolor: "#26324B",
    borderRadius: 10,
    color: "white",
  };
  const paperStyle = { margin: 10, padding: 5 };
  const longInputStyle = { width: 400, borderRadius: 2 };
  const shortInputStyle = { width: 200, borderRadius: 2 };

  return (
    <div>
      <Button variant="contained" sx={addButtonStyle} onClick={handleClickOpen}>
        Add user
      </Button>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ bgcolor: "#14213D", position: "fixed" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Update {props.title}
            </Typography>
            <Button
              autoFocus
              ariant="outlined"
              sx={cancelButtonStyle}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button autoFocus sx={saveButtonStyle} onClick={handleSubmit}>
              Save
            </Button>
          </Toolbar>
        </AppBar>

        <Paper sx={paperStyle}>
          <form>
            <Stack direction="column" spacing={3} justifyContent="center">
              <Divider />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <label htmlFor="contained-button-file">
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 300, color: "#14213D" }}
                  >
                    Choose a Profile Picture
                  </Typography>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setPostData({ ...postData, picture: base64 })
                    }
                  />
                </label>
                <Divider />
              </Stack>
              <Stack justifyContent="center" direction="row" spacing={1}>
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  name="email"
                  type="email"
                  label="Email"
                  sx={longInputStyle}
                />
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  name="password"
                  type="password"
                  label="Password"
                  sx={shortInputStyle}
                />
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  name="employeeNumber"
                  label="Employee Number"
                  sx={longInputStyle}
                />
              </Stack>
              <Divider />
              <Stack justifyContent="center" direction="row" spacing={1}>
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  name="firstName"
                  label="First Name"
                  sx={longInputStyle}
                />

                <TextField
                  id="outlined-required"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  name="lastName"
                  label="Last Name"
                  sx={longInputStyle}
                />
              </Stack>
              <Divider textAlign="center">Birthday</Divider>
              <Stack justifyContent="center" direction="row" spacing={1}>
                <TextField
                  id="outlined-start-adornment"
                  type="date"
                  required
                  onChange={handleChange}
                  defaultValue={materialDateInput}
                  name="dateOfBirth"
                  variant="outlined"
                  sx={longInputStyle}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Age"
                  required
                  value={outVal}
                  onChange={handleChange}
                  name="age"
                  variant="outlined"
                  InputProps={{ readOnly: true }}
                  sx={shortInputStyle}
                />
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  name="placeOfBirth"
                  label="Place of Birth"
                  sx={longInputStyle}
                />
              </Stack>
              <Divider />
              <Stack justifyContent="center" direction="row" spacing={1}>
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    row
                    value={postData.gender}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    defaultValue={postData.gender}
                    required
                  >
                    <FormControlLabel
                      value="Female"
                      onChange={(e) =>
                        setPostData({ ...postData, gender: e.target.value })
                      }
                      name="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      onChange={(e) =>
                        setPostData({ ...postData, gender: e.target.value })
                      }
                      name="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Others"
                      onChange={(e) =>
                        setPostData({ ...postData, gender: e.target.value })
                      }
                      name="other"
                      control={<Radio />}
                      label="Others"
                    />
                  </RadioGroup>
                </FormControl>

                <Divider />
                <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Civil Status
                  </FormLabel>
                  <RadioGroup
                    row
                    value={postData.civilStatus}
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="civilStatus"
                    defaultValue={postData.civilStatus}
                    required
                  >
                    <FormControlLabel
                      value="Single"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          civilStatus: e.target.value,
                        })
                      }
                      control={<Radio />}
                      label="Single"
                    />
                    <FormControlLabel
                      value="Married"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          civilStatus: e.target.value,
                        })
                      }
                      control={<Radio />}
                      label="Married"
                    />
                    <FormControlLabel
                      value="Divorced"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          civilStatus: e.target.value,
                        })
                      }
                      control={<Radio />}
                      label="Divorced"
                    />
                    <FormControlLabel
                      value="Widowed"
                      onChange={(e) =>
                        setPostData({
                          ...postData,
                          civilStatus: e.target.value,
                        })
                      }
                      control={<Radio />}
                      label="Widowed"
                    />
                  </RadioGroup>
                </FormControl>
                <Divider />
              </Stack>

              <Divider />
              <Stack justifyContent="center" direction="row" spacing={1}>
                <TextField
                  id="outlined-required"
                  variant="outlined"
                  onChange={handleChange}
                  required
                  name="mobile"
                  label="Mobile No."
                  sx={longInputStyle}
                />
              </Stack>
              <Divider />
            </Stack>
          </form>
        </Paper>
      </Dialog>
    </div>
  );
};

export default UpdatePersonal;
