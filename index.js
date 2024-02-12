const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

app.get("/api/testing", async (req, res) => { res.send("Working 0.1") });


app.listen(9090, () => {
  console.log("Server is running..." + 9090)
})