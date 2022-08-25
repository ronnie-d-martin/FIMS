import React, {Link} from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { useNavigate, useLocation, useParams } from 'react-router-dom'


export default function Options() {
  const userE = JSON.parse(localStorage.getItem('profile'));
const navigate = useNavigate();
  const actions = [
    { icon: <DownloadForOfflineRoundedIcon />, name: 'Download', operation: 'download' },
    { icon: <PrintIcon />, name: 'Print', operation: 'print' },
  ];

  function handleClick (e,operation){
    e.preventDefault();
    if(operation=="download"){
      // do something 
    }else if(operation=="print"){
      //do something else
      navigate(`/report/${userE?.result._id}`)
    }
   
  };
  return (
    <Box sx={{ height: 'fit-to-content', transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
