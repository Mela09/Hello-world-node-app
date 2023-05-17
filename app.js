const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello, World!God is love');
});

const port = 3000;
app.listen(port, () => {
console.log(`Server running on port ${port}`);
});