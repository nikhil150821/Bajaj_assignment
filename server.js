const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/bfhi/', (req, res) => {
    res.status(200).send({ "operation_code": 1 });
});

app.post('/bfhi', async (req, res) => {
    const { data } = req.body;

    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = null;

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(Number(item));
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item === item.toLowerCase() && (highestLowercaseAlphabet === null || item > highestLowercaseAlphabet)) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).send(response);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on http://localhost:${process.env.PORT || 3000}/");
});