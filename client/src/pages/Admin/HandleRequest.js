import React from 'react';
import AdminHeader from '../../components/Admin/AdminHeader'
import RequestTable from '../../components/Admin/RequestTable'

export default function HandleRequest () {
    return (
        <AdminHeader title="Requests" component={<RequestTable/>}/>
    );
}