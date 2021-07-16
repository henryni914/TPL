import React, { useState } from 'react';
import Calendar from 'react-calendar';
import {
    IconButton,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons";

export default function CalendarModal(props) {
    // console.log(props)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, onChange] = useState(new Date());


    // console.log(value)

    return (
        <div>
            {/* <Button onClick={onOpen} >Date</Button> */}
            <IconButton
                colorScheme="blue"
                aria-label="Search database"
                icon={<CalendarIcon />}
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Date of Trade</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Calendar
                            // activeStartDate={new Date()}
                            onChange={props.onChange}
                            value={props.date}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div >
    );
}