const express = require ('express');
const app = express();



app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
})

const PORT = 3000;
app.listen(PORT, (req, res)=>{
  console.log("Server is running on port 3000");
})
