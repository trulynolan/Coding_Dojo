const express = require('express');
const app = express();
const port = 8000;
const User = require("./user.js");
const Company = require("./company.js");



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/api/test", (req,res) => {
    res.json({message:"You did it!"})
})

app.get("/api/users/new", (req,res)=>{
    res.json(new User);
})

app.get("/api/companies/new", (req,res) => {
    res.json(new Company);
})

app.get("/api/user/company", (req,res)=>{
    res.json({user: new User, company : new Company})
})

// app.get("/api/order", (req,res) => {
//     const order = {
//         name:"Nolan",
//         base:"medium roast"
//     }
//     res.json(order);
// })

app.listen(port, ()=>console.log('running on port ${post} is a new way I like to be'))