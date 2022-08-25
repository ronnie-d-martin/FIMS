import React from 'react';
import AdminHeader from '../../components/Admin/AdminHeader'
import Dashboard from '../../components/Admin/Dashboard'

export default function AdminDashboard () {
    return (
        <AdminHeader title="DASHBOARD" component={<Dashboard/>}/>
    );
}