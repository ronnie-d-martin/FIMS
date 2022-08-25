import React from 'react';
import Header from '../../components/Faculty/Header'
import Account from '../../components/Faculty/Account'

export default function MyAccount () {

    return (           
        <Header title="MY ACCOUNT" component={<Account/>}/>
    );
}