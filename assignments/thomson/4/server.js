import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = 8080

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files after cookies are set
app.use('/', express.static(path.join(__dirname, 'framable')))
app.use('/frame-path-attack', express.static(path.join(__dirname, 'frame-path-attack')))


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})