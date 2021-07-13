import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { useSelector } from "react-redux";

export default function UserHistory() {

    const stateUser = useSelector(state => state.user)
    // console.log(stateUser)
    const [trades, setTrades] = useState(null);
    console.log(trades)

    useEffect(() => {
        API.getUserTrades(stateUser.id).then(res => {
            setTrades(res.data)
        });
    }, [])

    return (
        <>
            <h1>History</h1>
            <p>trades will render here</p>
        </>
    )
}