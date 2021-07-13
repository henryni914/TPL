import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import { useSelector } from "react-redux";
import moment from 'moment';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"

export default function UserHistory() {

    const stateUser = useSelector(state => state.user)
    // console.log(stateUser)
    const [trades, setTrades] = useState(null);
    console.log(trades)

    useEffect(() => {
        if (stateUser.id) {
            API.getUserTrades(stateUser.id).then(res => {
                setTrades(res.data)
            });
        }
    }, [])

    return (
        <Container maxW="container.lg" >
            <h1>History</h1>
            {trades ?
                <Table variant="striped" colorScheme="blue">
                    <TableCaption>Trade History</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Open Date</Th>
                            <Th>Ticker</Th>
                            <Th isNumeric>Price</Th>
                            <Th isNumeric>Quantity</Th>
                            <Th isNumeric>Cost</Th>
                            <Th isNumeric>Net</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {trades.map(trade => (
                            <Tr key={trade.id}>
                                <Td>{moment(trade.open_date).format('l')}</Td>
                                <Td>{trade.ticker}</Td>
                                <Td isNumeric>${trade.price}</Td>
                                <Td isNumeric>{trade.quantity}</Td>
                                <Td isNumeric>${trade.cost}</Td>
                                <Td isNumeric>{trade.net}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Open Date</Th>
                            <Th>Ticker</Th>
                            <Th isNumeric>Price</Th>
                            <Th isNumeric>Quantity</Th>
                            <Th isNumeric>Cost</Th>
                            <Th isNumeric>Net</Th>
                        </Tr>
                    </Tfoot>
                </Table>
                :
                <p>You have no trades in your history</p>
            }

        </Container>
    )
}