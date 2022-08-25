import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams  } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import {getFacultyData, deleteUser} from '../../actions/actionsAdmin';
import { Table, Button, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { blue, red } from '@mui/material/colors';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { DataGridPro, GridActionsCellItem,} from '@mui/x-data-grid-pro';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import UpdatePersonal from "./UpdateAndAdd/UpdatePersonal";
import AddPersonal from "./UpdateAndAdd/AddPersonal";

import Swal from "sweetalert2";


export default function AccountTable() {
  const [isCheck, setCheck] = React.useState(false);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.adminData);

  useEffect(() => {

      dispatch(getFacultyData());

  
    }, [dispatch])
 


    const handleViewAccount = () => {
        navigate('/profile');
    }
   
    const verified = users.filter(({status}) => status !== 'unverified');
    
    let rows = [];
    rows = verified.map((obj, index) => {
      return (rows = {
        id: obj._id,
         employeeNumber: obj.employeeNumber, lastName: obj.lastName, firstName: obj.firstName, age: obj.age, gender: obj.gender, email: obj.email, mobile: obj.mobile,
      });
    });

    const columns = [
  
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'employeeNumber', headerName: 'Employee Number', width: 150 },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      { field: 'age', headerName: 'Age', width: 80 },
      { field: 'gender', headerName: 'Gender', width: 100 },
      { field: 'mobile', headerName: 'Contact Number', width: 150 },
     
     
      
      {
        field: 'email',
        headerName: 'Email',
        width: 130,
      },

     
      {
        field: 'actions',
        disableClickEventBubbling: true,
        type: 'actions',
        headerName: 'Actions',
        width: 200,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          return [
      
            <GridActionsCellItem
            icon={<EditRoundedIcon />}
            label="view"
            onClick={() =>  navigate(`/manageA/${id}`, {state: {id:1, name:'personal'}})}       
            style={{ color: blue[500] }}
            />,
            
                             
            <GridActionsCellItem
              icon={<PictureAsPdfRoundedIcon />}
              label="Delete"
             
              onClick={() => navigate(`/reportAdmin/${id}`)}
              
              style={{ color: blue[500] }}
            />,

            <GridActionsCellItem
            icon={<DeleteRoundedIcon />}
            label="Delete"
            onClick={() =>  {const swalWithBootstrapButtons = Swal.mixin({

            })
            
            swalWithBootstrapButtons.fire({
              title: 'Are you sure to delete this account?',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes!',
              cancelButtonText: 'No!',
              
            }).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Deleted!',
                  'Account has been deleted!',
                  'success',
           
                  dispatch(deleteUser(id)),
                  window.location.reload(),
                
                 
                )
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'Delete aborted!',
                  'error'
                )
              }
            })}}
            style={{ color: red[500] }}
          />,

            
          ];
        },
      },
    ];

  return (
    
        <div style={{ height: '1450%', width: '100%' }}>
          <AddPersonal/>
             
            <DataGrid
          
            rows={ rows}
            columns={columns}
            pageSize={7}
            rowsPerPageOptions={[6]}
          
            onDoubleClick={handleViewAccount}
            disableSelectionOnClick
            />
                        
        </div>
      
  
  );
}

/*
  rows=[
      { id: user._id, employeeNumber: user.employeeNumber, lastName: user.lastName, firstName: user.firstName, age: user.age, gender: user.gender, email: user.email, mobile: user.mobile },
    ];*/