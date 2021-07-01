import React from 'react';
import { useSelector } from 'react-redux';

export default function DashOverview() {

    const stateUser = useSelector(state => state.user)
    console.log(stateUser);

    return (
        <h1>Overview</h1>
    )
}