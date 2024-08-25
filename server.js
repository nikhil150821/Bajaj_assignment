const express = require('express');
const cors = require('cors'); // Import the CORS package
require('dotenv').config();

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

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
        user_id: "Nikhil_21012004",
        email: "nikhil150821@gmail.com",
        roll_number: "21BCE9601",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).send(response);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
