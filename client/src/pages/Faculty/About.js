import React, { useState, useEffect } from "react";
import Header from '../../components/Faculty/Header'
import AboutTable from '../../components/AboutTable'
import { Stack } from '@mui/material';
import AdminHeader from '../../components/Admin/AdminHeader';
import AboutManage from "../Admin/AboutManage";

export default function About (props) {
    
    const [vision, setVision] = useState({vision: 'Infosy is aspiring to be the world’s most successful and important information technology company. Successful in providing our clients appropriate websites and other technology to aid complications. Successful in presenting extraordinary technology to new clients. The corporation is significant because it will continue to be the primary source of much of the invested in this industry.'});
    const [mission, setMission] = useState({mission: 'Infosy exist to offer innovative websites and pioneering technology that pursues to contribute to the productivity and development of various micro and macro enterprises.'})
    const [goals, setGoals]= useState({goals: 'Quality and Excellence - Promoting quality and relevant web designs and development that meet international standards. Relevance and Responsiveness - Knowledge creation and distribution across a wide range of disciplines that are relevant and responsive to rapidly changing local and international situations. Efficiency and Effectiveness - Social, institutional, and individual returns and advantages received from the use of higher technological resources are optimized. '})
    const user = JSON.parse(localStorage.getItem('profile'));
    return (

        <div className='profile-main'>
            {user?.result.userType==='faculty'?  <Stack direction='column'>
                <Header title="ABOUT" component={<AboutTable v={vision} m={mission} g={goals} />}/>
            </Stack> : <Stack direction='column'><AdminHeader title="ABOUT" component={<AboutManage />}/></Stack> }
           
             
        </div>
    );
}