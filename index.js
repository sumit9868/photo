const app=require('express')();

app.get('/',(req,res)=>{
    res.send('successfully deployed the server');
})
app.listen(3000,()=>{
    console.log('you are listining to port 3000');
})