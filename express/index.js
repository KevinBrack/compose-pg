const express = require('express');
const PORT = 1337;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("ROOT ENDPOINT HIT");
    return res.status(200).json("Hello World!");
});

app.listen(PORT, () => console.log(`APP RUNNING ON PORT ${PORT}`));