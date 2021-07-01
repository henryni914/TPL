import React, { useRef, useState } from 'react';
import {
    Button,
    Container,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
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
} from '@chakra-ui/react';

export default function NewTrade() {

    const [price, setPrice] = useState("0.00");
    const [cost, setCost] = useState("0.00");
    const [quantity, setQuantity] = useState(0);
    let tickerRef = useRef(null)
    let tradeTypeRef = useRef(null);

    const format = (val) => `$` + val;
    const parse = (val) => val.replace(/^\$/, "");

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
    function handleSubmit() {
        let tradeObj = {
            type: tradeTypeRef.current.value,
            ticker: tickerRef.current.value,
            quantity: quantity,
            price: price,
            total: cost
        }
        console.log(tradeObj)
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
                    <Select placeholder="Select option" ref={tradeTypeRef}>
                        <option value="stock">Stock</option>
                        <option value="option">Option</option>
                    </Select>
                    <FormLabel>Number of shares</FormLabel>
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
                    <FormLabel>Cost per share</FormLabel>
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
                    <Stat>
                        <StatLabel>Total Cost</StatLabel>
                        <StatNumber>${cost}</StatNumber>
                    </Stat>
                    <Button
                        mt={4}
                        colorScheme="teal"
                        type="submit"
                        onClick={() => handleSubmit()}
                    // isLoading={submitting}
                    >
                        Submit
                    </Button>
                </Stack>
            </FormControl>
        </Container>
    )
}