const express = require('express');
const cors = require('cors')
const app = express()
require('dotenv').config()
const PORT =  process.env.PORT;
app.use(cors())
app.use(express.json())

app.get("/api/testing", async (req, res) => { res.send("Working 0.1") });

// Serve static files from the 'public' directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static("../public"));
app.use("/public", express.static("./public"));

app.listen(PORT, () => {
  console.log("Server is running..." + PORT)
})