const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>{res.json({name:'G9PAY', owner:'Umar Hadi Gwani', opay:'7012869066', status:'Live'})});
app.listen(process.env.PORT||5000, ()=>console.log('G9PAY Live'));
