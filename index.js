const express = require("express")
const app = express()



app.get("/health", (req,res) => {
    return res.send("Health check!")
})


app.listen(8080, () => {
    console.log("Service is running!..")
})