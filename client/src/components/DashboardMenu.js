import React, { useState } from 'react';
import DashOverview from '../components/DashOverview';
import NewTrade from '../components/NewTrade';
import UserHistory from './UserHistory';
import MobileDashTabs from '../components/MobileDashTabs';
import {
    Grid,
    GridItem,
    Stack,
    Box,
    Link,
    // Button,
    // useColorModeValue,
} from "@chakra-ui/react";




export default function DashboardMenu() {

    const dashboardTabs = [
        'Overview',
        'New Trade',
        'Trade History',
        'Statistics',
        '2',
        '3'
    ]
    const [tab, setTab] = useState("Overview");

    const handleTabChange = tab => {
        setTab(tab)
    };

    const renderComponent = tab => {
        switch (tab) {
            case "Overview": {
                return <DashOverview />
            }
            case "New Trade": {
                return <NewTrade />
            }
            case "Trade History": {
                return <UserHistory />
            }
            default: return <DashOverview />
        };
    };

    const DesktopDash = () => {
        return (
            <>
                <GridItem colSpan={1}
                    // bg='grey'
                    align={'center'}
                >
                    <Stack direction={'column'} spacing={4}>
                        {
                            dashboardTabs.map((tab) => (
                                <Box key={tab} >
                                    <Link
                                        p={2}
                                        fontSize={'md'}
                                        onClick={() => handleTabChange(tab)}
                                    >
                                        {tab}
                                    </Link>
                                    {/* <Button
                                        fontSize={'md'}
                                        width='100%'
                                        onClick={() => handleTabChange(tab)}
                                    >
                                        {tab}
                                    </Button> */}
                                </Box>
                            ))
                        }
                    </Stack>
                </GridItem>
            </>
        )
    }

    return (
        <Box
            // bg={useColorModeValue('white', 'gray.800')}
            // color={useColorModeValue('gray.600', 'white')}
            py={{ base: 4 }}
            px={{ base: 0 }}
            align={'center'}
        >
            {/* use below for mobile */}
            {/* display={{ base: 'flex', md: 'none' }} */}
            <Grid
                templateColumns="repeat(5, 1fr)"
                gap={4}
                display={{ base: 'none', md: 'grid' }}
            // bg='blue'
            >
                <DesktopDash />
                <GridItem colSpan={4}
                // bg="tomato"
                >
                    {renderComponent(tab)}
                </GridItem>
            </Grid>

            <Grid display={{ base: 'flex', md: 'none' }}>
                <MobileDashTabs tabs={dashboardTabs} />
            </Grid>
        </Box>

    )
}

