const express = require('express');
const app = express();
const PORT = 3001;

// Root endpoint
app.get('/', (req, res) => {
    res.send("Welcome to Backend Server");
});

// JSON endpoint
app.get('/json', (req, res) => {
    res.json({ server: "Welcome to Backend", url: "localhost" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend Server Started\nUrl: http://localhost:${PORT}`);
});
