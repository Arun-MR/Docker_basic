const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(express.json()); // for parsing application/json
app.use(cors());

app.get('/', (req, res) => {
   res.send('Hello, world!!!!!!!132344df4'); // Sending a response to the client
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
