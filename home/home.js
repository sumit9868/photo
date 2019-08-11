const express=require('express');
const app=express();
const path=require('path');
const publicPath=path.resolve(__dirname,'public');
// app.use(express.static(path.resolve(__dirname+'/public')));
app.use(express.static(publicPath));
app.set('view engine','hbs');

app.get('/',(req,res,next)=>{
    res.render('index');
})
app.listen((3000),()=>{
    console.log('listining to the port 3000')
})