import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import Stack  from "@mui/material/Stack";

import PersonalInfo from './Tables/PersonalInfo';
import EducBack from './Tables/EducBack';
import CivilServe from './Tables/CivilServe';
import WorkExp from './Tables/WorkExp';
import LDI from './Tables/LDI';
import UpdatePersonal from './UpdateAndAdd/UpdatePersonal'
import UpdateEducation from './UpdateAndAdd/UpdateEducation'
import AddCivilServe from './UpdateAndAdd/AddCivilServe';
import AddWorkExp from './UpdateAndAdd/AddWorkExp';
import AddLDI from './UpdateAndAdd/AddLDI';
import UserProfileTable from './UserProfileTable';

export default function ManageTable () {

    const [currentId, setCurrentId] = useState(0);
    const location = useLocation();

    var pi = "Personal Information";
    var eb = "Educational Background";
    var cse = "Civil Service Eligibility";
    var we = "Work Experience";
    var lad = "Learning and Development Interventions/Training Programs Attended";


    return (

        <Stack>
             <Stack direction='column' spacing={1}>
                    <UserProfileTable/>
             
                   </Stack>
                
        </Stack>

    );
}