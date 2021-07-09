import React from 'react';
import { useSelector } from 'react-redux';
import Calendar from './Calendar';

export default function DashOverview() {

    const stateUser = useSelector(state => state.user)
    console.log(stateUser);

    return (
        <div>
            <h1>Overview</h1>
            <Calendar />
        </div>

    )
}