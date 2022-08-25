import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams  } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import {getFacultyData} from '../../actions/actionsAdmin';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { lightGreen, red } from '@mui/material/colors';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { DataGridPro, GridActionsCellItem,} from '@mui/x-data-grid-pro';
import RemoveCircleTwoToneIcon from '@mui/icons-material/RemoveCircleTwoTone';
import { Button} from '@mui/material';
import { updateVerify, deleteUser } from '../../actions/actionsAdmin';

import Swal from "sweetalert2";
//




export default function RequestTable() {
  const [checkboxSelection, setCheckboxSelection] = React.useState(true);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();


  const navigate = useNavigate();
  
  const {users} = useSelector(state => state.adminData);
  
    useEffect(() => {

      dispatch(getFacultyData());

  
    }, [dispatch])

    const handleViewAccount = () => {
        navigate('/profile');
    }

    const unverified = users.filter(({status}) => status !== 'verified');
    
    let rows = [];
    rows = unverified.map((obj, index) => {
      return (rows = {
        id: obj._id,
         employeeNumber: obj.employeeNumber, lastName: obj.lastName, firstName: obj.firstName, age: obj.age, gender: obj.gender, email: obj.email, mobile: obj.mobile,
         status: obj.status
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
      { field: 'status', headerName: 'Status', width: 130 },
     
      {
        field: 'actions',
        disableClickEventBubbling: true,
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
            icon={<CheckCircleTwoToneIcon />}
            label="approve"
            onClick={() =>  {const swalWithBootstrapButtons = Swal.mixin({

            })
            
            swalWithBootstrapButtons.fire({
              title: 'Verify this account?',
               icon: 'question',
              showCancelButton: true,
              confirmButtonText: 'Yes!',
              cancelButtonText: 'No!',
              
            }).then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                  'Verify',
                  'Account has been verified.',
                  'success',
           
                  dispatch(updateVerify(id)),
                  window.location.reload(),
                 
  
                 
                )
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire(
                  'Cancelled',
                  'verify aborted!',
                  'error'
                )
              }
            })}}
            style={{ color: lightGreen['A700'] }}
            />,
    
            <GridActionsCellItem
              icon={<RemoveCircleTwoToneIcon />}
              label="deny"
              className="textPrimary"
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
              style={{ color: red['A700'] }}
            />,
          ];
        },
      },
    ];

 

  return (
    <div style={{ height: 500, width: '100%' }}>
       <Button
        sx={{ mb: 2 }}
        onClick={() => setCheckboxSelection(!checkboxSelection)}
      >
        Toggle checkbox selection
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[6]}
        checkboxSelection={checkboxSelection}
        
        onDoubleClick={handleViewAccount}
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRowData = rows.filter((row) =>
            selectedIDs.has(row.id.toString())
          
          );
          
        }}
      
        
      />

    </div>
  );
}
