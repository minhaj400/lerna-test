import express from 'express'
import { greet } from "@monorepo/shared"

const app = express()

app.get("/", (req, res) => {
    res.send(greet("World"));
})

app.listen("3000", () => {console.log(`Server started at port 3000`)})