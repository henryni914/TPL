import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogout } from '../actions/user';
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {

    const { isOpen, onToggle } = useDisclosure();
    const dispatch = useDispatch();
    const stateUser = useSelector(state => state.user)
    const [auth, setAuth] = useState(false)
    // console.log(stateUser)

    function handleLogout() {
        setAuth(!auth)
        dispatch(setUserLogout())
    }

    useEffect(() => {
        console.log('redux state changed')
        console.log(stateUser)
        setAuth(stateUser.authenticated)
    }, [stateUser])

    const NAV_ITEMS = [
        {
            label: 'Home',
            href: '/'
        },
        {
            label: 'Dashboard',
            href: '/dashboard'
            // children: [
            //     {
            //         label: 'Placeholder',
            //         subLabel: 'Placeholder',
            //         href: '#',
            //     }
            // ],
        },

        {
            label: 'About',
            href: '/about',
        }
    ];

    const DesktopNav = () => {
        return (
            <Stack direction={'row'} spacing={4}>
                {NAV_ITEMS.map((navItem) => (
                    <Box key={navItem.label}>
                        <Link
                            p={2}
                            to={navItem.href}
                            fontSize={'sm'}
                            fontWeight={500}
                            color='gray.600'
                            _hover={{
                                textDecoration: 'none',
                                color: 'gray.800',
                            }}>
                            {navItem.label}
                        </Link>
                    </Box>
                ))}
            </Stack>
        );
    };

    const MobileNav = () => {
        return (
            <Stack
                bg={useColorModeValue('white', 'gray.800')}
                p={4}
                display={{ md: 'none' }}>
                {NAV_ITEMS.map((navItem) => (
                    <MobileNavItem key={navItem.label} {...navItem} />
                ))}
            </Stack>
        );
    };

    const MobileNavItem = ({ label, href }) => {

        return (
            <Stack spacing={4} >
                <Flex
                    py={2}
                    as={Link}
                    to={href}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}>
                    <Text
                        fontWeight={600}
                        color={useColorModeValue('gray.600', 'gray.200')}>
                        {label}
                    </Text>
                </Flex>
            </Stack>
        );
    };

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}>
                        Logo
                    </Text>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                {auth ?
                    (<Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Link to='/'>
                            <Button
                                as={'a'}
                                fontSize={'sm'}
                                fontWeight={400}
                                onClick={() => handleLogout()}
                            >
                                Logout
                            </Button>
                        </Link>
                    </Stack>)
                    : (<Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Link to='/login'>
                            <Button
                                as={'a'}
                                fontSize={'sm'}
                                fontWeight={400}
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to='/signup'>
                            <Button
                                display={{ base: 'none', md: 'inline-flex' }}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'blue.400'}
                                // href={'/signup'}
                                _hover={{
                                    bg: 'blue.300',
                                }}>
                                Sign Up
                            </Button>
                        </Link>
                    </Stack>)
                }

            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}




