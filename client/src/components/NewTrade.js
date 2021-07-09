import React, { useRef, useState } from 'react';
import { useSelector } from "react-redux";
import Calendar from './Calendar';
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    InputGroup,
    InputRightElement,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    Stack,
    Stat,
    StatLabel,
    StatNumber,
    Alert,
    AlertIcon,
    AlertDescription,
} from '@chakra-ui/react';
import API from '../utils/API';

export default function NewTrade() {

    const [price, setPrice] = useState("0.00");
    const [cost, setCost] = useState("0.00");
    const [tradeType, setTradeType] = useState('stock');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const stateUser = useSelector(state => state.user)
    const [date, setDate] = useState(new Date());

    let tickerRef = useRef(null)

    const format = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, "");

    const selectDate = (event) => {
        // console.log(event)
        setDate(event)
    }

    const updatePriceAndCost = (val) => {
        // console.log(`val: ${val}`)
        setPrice(parse(val))
        setCost((quantity * val).toFixed(2))
    }

    const updateQuantityAndCost = (val) => {
        // console.log(`quantity: ${val}`)
        setQuantity(val)
        setCost((val * price).toFixed(2))
    }

    const formValidation = (tradeObj) => {
        // console.log(stateUser.id)
        tradeObj.user_id = stateUser.id
        if (!tradeObj.ticker) {
            setError('Please enter a ticker')
        } else if (!tradeObj.type) {
            setError('Please select a trade type')
        } else if (JSON.parse(tradeObj.quantity) === 0) {
            if (tradeObj.type === 'stock') {
                setError('Please enter the number of shares')
            } else {
                setError('Please enter the number of contracts')
            }
        } else if (JSON.parse(tradeObj.price) === 0) {
            if (tradeObj.type === 'stock') {
                setError('Please enter the price per share')
            } else {
                setError('Please enter the price per contract')
            }
        } else {
            setError(null)
            API.createTrade(tradeObj).then(res => {
                console.log(res);
            })
        }
    }

    function handleSubmit() {
        setSubmitting(true)
        let tradeObj = {
            ticker: tickerRef.current.value,
            type: tradeType,
            quantity: quantity,
            price: price,
            total: cost
        }
        console.log(tradeObj)
        formValidation(tradeObj)
        if (!error) {
            // insert API call to post to DB
            setSubmitting(false)
            console.log('form validated')
        }
    };

    return (
        <Container>
            <h1>Input New Trades Here!</h1>
            <FormControl py={{ base: 4 }} isRequired >
                <Stack>
                    <FormLabel>Ticker</FormLabel>
                    <Input id="ticker" placeholder="TSLA" ref={tickerRef} />
                    {/* <FormHelperText>Placeholder</FormHelperText> */}
                    <FormLabel>Type of Trade</FormLabel>
                    <Select placeholder="Select trade type" onChange={(val) => setTradeType(val.target.value)}>
                        <option value="stock">Stock</option>
                        <option value="option">Option</option>
                    </Select>
                    <FormLabel>Number of
                        {(tradeType === 'stock') ? " shares" : " contracts"}
                    </FormLabel>
                    <Stack></Stack>
                    <NumberInput
                        size="md"
                        id="quantity"
                        maxW={24}
                        min={0}
                        value={quantity}
                        onChange={(num) => updateQuantityAndCost(num)}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel>Cost per
                        {(tradeType === 'stock') ? " share" : " contract"}
                    </FormLabel>
                    <NumberInput
                        id='price'
                        size="md"
                        maxW={24}
                        defaultValue={0}
                        min={0}
                        precision={2}
                        onChange={(val) => updatePriceAndCost(val)}
                        value={format(price)}>
                        <NumberInputField />
                    </NumberInput>
                    <FormLabel>Date</FormLabel>
                    <InputGroup size="md">
                        <Input
                            // placeholder="Date"
                            size="md"
                            value={date}
                        />
                        <InputRightElement >
                            <Calendar onChange={selectDate} date={date} />
                        </InputRightElement>
                    </InputGroup>

                    <Stat>
                        <StatLabel>Total Cost</StatLabel>
                        <StatNumber>${cost}</StatNumber>
                    </Stat>
                    {error ? (
                        <Alert status="error" py={4} mt={4}>
                            <AlertIcon />
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    ) : (
                        <></>
                    )}
                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                        onClick={() => handleSubmit()}
                        isLoading={submitting}
                    >
                        Submit
                    </Button>
                </Stack>
            </FormControl>
        </Container>
    )
}