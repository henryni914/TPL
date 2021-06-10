import React from 'react';
import { Link } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from "@chakra-ui/react";
import {
    ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Navbar() {

    return (
        <Breadcrumb spacing="10px"
            separator=""
            p={4}
        // align="start"
        // separator={<ChevronRightIcon color="gray.500" />}
        >
            <BreadcrumbItem >
                <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/about">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="#">Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}