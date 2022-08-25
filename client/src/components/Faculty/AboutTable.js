import { Paper, Divider, Typography, TextField, Button } from "@mui/material";
import '@fontsource/roboto/500.css';
import { Box } from "@mui/system";

export default function AboutTable (props) {

    const divStyle = {padding: 5}

    return (
            <Paper alignItems='flex-start' sx={{ flexGrow:1, width:'inherit', height:'auto', marginTop:5, padding:5 }}>
                <Box sx={divStyle}>
                <Typography variant="h3" sx={{ fontWeight:500 }}>Vision</Typography>
                <Typography variat="h4" sx={{fontWeight:300}}>Infosy is aspiring to be the world’s most successful and important information technology company. Successful in providing our clients appropriate websites and other technology to aid complications. Successful in presenting extraordinary technology to new clients. The corporation is significant because it will continue to be the primary source of much of the invested in this industry.</Typography>
                </Box>
                <Divider />
                <Box sx={divStyle}>
                <Typography variant="h3" sx={{ fontWeight:500 }}>Mission</Typography>
                <Typography variat="h4" sx={{fontWeight:300}}>Infosy exist to offer innovative websites and pioneering technology that pursues to contribute to the productivity and development of various micro and macro enterprises.</Typography>
                </Box>
                <Divider />
                <Box sx={divStyle}>
                <Typography variant="h3" sx={{ fontWeight:500 }}>Goals</Typography>
                <Typography variat="h4" sx={{fontWeight:300}}>In the quest of its mission, the initiatives and efforts of the Infosy are geared towards the achievement of the following goals:</Typography>
                <Box sx={divStyle}>
                <Typography variat="h5" sx={{fontWeight:500}}>1. Quality and Excellence. </Typography>
                <Typography variat="h5" sx={{fontWeight:300}}>Promoting quality and relevant web designs and development that meet international standards. </Typography>
                <Typography variat="h5" sx={{fontWeight:500}}>2. Relevance and Responsiveness.  </Typography>
                <Typography variat="h5" sx={{fontWeight:300}}>Knowledge creation and distribution across a wide range of disciplines that are relevant and responsive to rapidly changing local and international situations.</Typography>
                <Typography variat="h5" sx={{fontWeight:500}}>3. Efficiency and Effectiveness.   </Typography>
                <Typography variat="h5" sx={{fontWeight:300}}>Social, institutional, and individual returns and advantages received from the use of higher technological resources are optimized.</Typography>
                </Box>
                </Box>
                
            </Paper>
    );
}