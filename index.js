const express = require('express')
const path = require('path')
const app = express() // Initialize express
require('dotenv').config() // Load .env file

// Public path
const publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath)) // We serve public folder

// We start the server on the port 3000
app.listen(process.env.PORT, (error) => {
  if (error) throw new Error(error)
  console.log(`Server is running on port ${process.env.PORT}`)
})
