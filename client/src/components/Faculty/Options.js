import React, {useState} from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { useNavigate } from 'react-router-dom';
const actions = [
  { icon: <DownloadForOfflineRoundedIcon />, name: 'Download' },
  { icon: <PrintIcon />, name: 'Print' },
];

export default function Options() {

  const navigate = useNavigate();
  const [print, setPrint]=useState(false);
  const handleclick = () => {
 const user = JSON.parse(localStorage.getItem('profile'));
  }

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
