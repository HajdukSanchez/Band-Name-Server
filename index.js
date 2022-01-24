const express = require('express')
const app = express() // Initialize express

// We start the server on the port 3000
app.listen(3000, (error) => {
  if (error) throw new Error(error)
  console.log(`Server is running on port 3000`)
})
