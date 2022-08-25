import React, { useState, useEffect } from "react";
import {useLocation } from 'react-router-dom';
import Stack  from "@mui/material/Stack";
import { getFaculty }from '../../actions/actionsFaculty';
import { useDispatch, useSelector } from 'react-redux';
import PersonalInfo from './Tables/PersonalInfo';
import EducBack from './Tables/EducBack';
import EducBackCol from './Tables/EducBackCol';
import EducBackVoc from './Tables/EducBackVoc';
import EducBackSecond from './Tables/EducBackSecond';
import CivilServe from './Tables/CivilServe';
import WorkExp from './Tables/WorkExp';
import LDI from './Tables/LDI';
import UpdatePersonal from './UpdateAndAdd/UpdatePersonal'
import UpdateEducation from './UpdateAndAdd/UpdateEducation';
import UpdateEducationSecond from './UpdateAndAdd/UpdateEducationSecond.js';
import UpdateEducationCol from './UpdateAndAdd/UpdateEducationCol';
import UpdateEducationVoc from './UpdateAndAdd/UpdateEducationVoc';
import AddEducationCol from './UpdateAndAdd/AddEducationCol';
import AddEducationVoc from './UpdateAndAdd/AddEducationVoc';
import AddCivilServe from './UpdateAndAdd/AddCivilServe';
import AddWorkExp from './UpdateAndAdd/AddWorkExp';
import AddLDI from './UpdateAndAdd/AddLDI';

export default function ManageTable () {
    const dispatch = useDispatch();
    const userE = JSON.parse(localStorage.getItem('profile'));
   
    useEffect(() => {
      dispatch(getFaculty(userE?.result._id));
  
  
    }, [dispatch])

    const [currentId, setCurrentId] = useState(0);
    const location = useLocation();

    var pi = "Personal Information";
    var eb = "Educational Background";
    var cse = "Civil Service Eligibility";
    var we = "Work Experience";
    var lad = "Learning and Development Interventions/Training Programs Attended";


    return (

        <Stack>
                {(() => {
                switch(location.state.name) {
                    case 'personal' :
                        return (
                            <Stack direction='column' spacing={1}>
                                <PersonalInfo title={pi} />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <UpdatePersonal title={pi}/>
                                </Stack>
                            </Stack>);
                    case 'education' :
                        return (
                            <Stack direction='column' spacing={1}>/
                                <EducBack title={eb} category="Elementary" />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <UpdateEducation title={eb} category="Elementary"/>
                                </Stack>

                                <EducBackSecond category="Secondary" />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <UpdateEducationSecond title={eb} category="Secondary"/>
                                </Stack>

                                <EducBackVoc category="Vocational/Trade Course" />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <AddEducationVoc title={eb} category="Vocational/Trade Course"/>
                                 
                                </Stack>
                                <EducBackCol category="College" />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <UpdateEducationCol title={eb} category="College"/>
                               
                                </Stack>
                            </Stack>);
                    case 'civil' :
                        return (
                            <Stack direction='column' spacing={1}>
                                <CivilServe title={cse} />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <AddCivilServe title={cse}/>
                                </Stack>
                            </Stack>);
                    case 'work' :
                        return (
                            <Stack direction='column' spacing={1}>
                                <WorkExp title={we} />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <AddWorkExp title={we}/>
                                </Stack>
                            </Stack>);
                    case 'training' :
                        return (
                            <Stack direction='column' spacing={1}>
                                <LDI title={lad} />
                                <Stack direction='row' spacing={1} justifyContent='center'>
                                    <AddLDI title={lad}/>
                                </Stack>
                            </Stack>);
                    default:
                        return ;

                }
            })()}
        </Stack>

    );
}