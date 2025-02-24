import express from 'express'
// console.log("hey ") 
const app = express()
// const port = 3000
// 192.168.1.111
// create a server
app.get('/'), (req, res) => {
  res.send('Hello World!')
}
  app.get('/about'), (req, res) => {
    res.send('Hello im about!')
  }
    app.get('/profile'), (req, res) => {
      res.send('Hello im profile!')
    }
    // app.listen(3000)
// run the server
// first method
 // app.listen(3000)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// 