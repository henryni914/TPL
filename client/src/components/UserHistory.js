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
    Box,
    Container,
    IconButton,
    List,
    ListItem,
    ListIcon,
    MdCheckCircle,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"
import { CheckCircleIcon, EditIcon } from "@chakra-ui/icons";

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
            {trades ?
                <Table variant="striped" colorScheme="blue">
                    <TableCaption placement="top">Trade History</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Open Date</Th>
                            <Th>Ticker</Th>
                            <Th>Type</Th>
                            <Th isNumeric>Quantity</Th>
                            <Th isNumeric>Price</Th>
                            <Th isNumeric>Cost</Th>
                            <Th isNumeric>Net</Th>
                        </Tr>
                    </Thead>
                    <Tbody>

                        {trades.map(trade => (
                            <>
                                <Tr key={trade.id}>
                                    <Td>{moment(trade.open_date).format('l')} {trade.completed ? '(closed)' : '(active)'}</Td>
                                    <Td>{trade.ticker}</Td>
                                    <Td>{trade.type}</Td>
                                    <Td isNumeric>{trade.quantity}</Td>
                                    <Td isNumeric>{Number(trade.price).toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Td>
                                    <Td isNumeric>{Number(trade.cost).toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Td>
                                    <Td isNumeric>{trade.net}</Td>
                                    <Td>
                                        <IconButton
                                            aria-label="Edit Trade"
                                            size="md"
                                            icon={<EditIcon />}
                                        />
                                    </Td>
                                </Tr>
                                {/* <Tr>
                                    <Accordion allowToggle>
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Box flex="1" textAlign="left">
                                                        Closing Trade(s)
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <Table size="sm">
                                                    <Thead>
                                                        <Tr>
                                                            <Th>Date</Th>
                                                            <Th isNumeric>Quantity</Th>
                                                            <Th isNumeric>Price</Th>
                                                            <Th isNumeric>Net</Th>
                                                        </Tr>
                                                    </Thead>
                                                    <Tbody>
                                                        <Tr key={trade.id}>
                                                            <Td>{moment(trade.open_date).format('l')}</Td>
                                                            <Td isNumeric>{trade.quantity}</Td>
                                                            <Td isNumeric>${trade.price.toLocaleString()}</Td>
                                                            <Td isNumeric>${(trade.quantity * trade.price).toFixed(2).toLocaleString()}</Td>
                                                        </Tr>
                                                    </Tbody>
                                                </Table>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </Tr> */}
                            </>
                        ))}

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>Open Date</Th>
                            <Th>Ticker</Th>
                            <Th>Type</Th>
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