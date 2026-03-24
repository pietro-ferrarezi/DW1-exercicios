const express = require("express")
const path = require("path")

const app = express()

const view = path.join(__dirname, "../", 'view/')
const public = path.join(__dirname, '../', 'public/')

app.use(express.static(public))

app.get("/", (req, res) => {
    res.sendFile(path.format({ root: "/", dir: view, base: "index.html" }))
})

app.listen(3030, () => {
    console.log("Server Running! http://localhost:3030")
})