const exp = require('constants')
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"tem")))
 
app.get('/about', (req,res)=> {
    // res.send('about')
    res.sendFile(path.join(__dirname,"./public/website.html"))
})

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,"./templates/index.html"))
// })
app.use(express.static(__dirname + '/templates'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})