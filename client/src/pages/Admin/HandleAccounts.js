import React from 'react';
import AdminHeader from '../../components/Admin/AdminHeader'
import AccountTable from '../../components/Admin/AccountTable'
import AddPersonal from '../../components/Admin/UpdateAndAdd/AddPersonal'

export default function AdminDashboard () {
    return (
        <AdminHeader title="Accounts" component={<AccountTable/>}/>
        
    );
}