import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Center,
    Box,
    Button,
    ButtonGroup,
    IconButton
} from "@chakra-ui/react"

import { EmailIcon } from "@chakra-ui/icons";

export default function MobileDashTabs(props) {
    console.log(props)
    return (
        <ButtonGroup variant="outline" spacing="2">
            {props.tabs.map(tab => (
                <IconButton
                    variant="outline"
                    colorScheme="teal"
                    aria-label="Send email"
                    icon={<EmailIcon />}
                />
            ))}

        </ButtonGroup>
    )
}