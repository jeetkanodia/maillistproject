const express = require("express")
const bodyParser = require('body-parser')
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))


app.get("/" , (req , res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/" , (req,res)=>{
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status:"subscribed",
                 merge_fields:{
                    FNAME: fName,
                    LNAME : lName
                 }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    
})


app.listen(3000, ()=>{
    console.log("Server up on 3000");
})

//API KEY
// 479db8368e7e3aba8d03a67212574af7-us21

// List id
// 84fb19329f