const express = require('express');
const app = express();
 const mysql = require('mysql')
const bodyParser = require('body-parser');
const cors = require('cors');
const Joi = require ('joi');
const fs = require ('fs')
const path = require('path')
const formidable = require('formidable');
PORT = process.env.PORT || 4001;
app.use(bodyParser.json({type:'*/*'}));                                           
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
 const con = mysql.createConnection({
               host:"localhost",
               user:"root",
               password:"", 
               database:"mychat"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
 })
app.get('/signup',(req,res)=>{
    res.send('Hello world , this is an api for the signup process')
})
app.post('/signup', (req,res)=>{      
    const schema = Joi.object().keys({
        email:Joi.string().trim().email(),
        username:Joi.string().trim(),
        password:Joi.string().min(8)
    })
     const result = schema.validate(req.body)
       if(result.error){
           console.log('An error has occured')
           res.send('Invalid details')
       }else{           
         console.log('Success')
      
           con.connect((err)=>{
               if(err) {
                   console.log('unable to connect to database')
                   res.send("Connecting...")
            }else{
                   console.log('connected to database successfully')
             const username = result.value.username;
             const password = result.value.password;
             const email = result.value.email;
              const sql = "INSERT INTO users (username,password,email) VALUES (?,?,?)";
               con.query(sql,[username,password,email],(err,result)=>{
                if (err) {console.log('unable to add data to the database'+ err)}
                else{
                    console.log('Saved to database successfully')
                    res.send('success')
                    
                }
               })}
             

           })

    }
       
   
})

app.get('/login',(req,res)=>{
    res.send('This is  the api for the login process')    

})
app.post('/login',(req,res)=>{  
    con.connect((err)=>{ 
        if (err){
            console.log('unable to log on to database')
        }else{
            console.log('connected to database successfully')
            const username = req.body.username;
            const password = req.body.password;
            const sql = "SELECT * from users WHERE username = (?) AND password = (?)";
            con.query(sql,[username,password],(err,result)=>{
                if (err){
                    console.log('unable to check data from the database'+ err)
            }else{
               if(result ==""){
                   console.log('user does not exist')
                   res.send('Invalid details')
               }else{
                   res.send('success')                                                          
                   console.log('user exist')                        
               }
            }     
            })
        }
    })

})
app.get('/editprofile',(req,res)=>{
    res.send('This is the api for editing profile')
    
})
app.post('/editprofile',(req,res)=>{
   //// console.log(req.body) 
   const form = new formidable.IncomingForm();         
   form.parse(req,(err,fields,files)=>{
       console.log(fields)           
       console.log(files.file.name)                                                                                         
   } )                                                                                                                                                                                                   
                                      
    })       
app.listen(PORT,()=>{
    console.log('Listening to port' +" "+  PORT)  
})                                                   