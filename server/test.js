
// joi.string().length(10).pattern(/^[0-9]+$/);
// Joi.date()
// .format("DD/MM/YYYY") // set desired date format here
// .raw()


// var express = require('express');
// var session = require('express-session');
// var app = express(). 

// // Make sure this is defined before any of your routes
// // that make use of the session.
// app.use(session({
//   secret: 'keyboard cat',
//   cookie: { maxAge: 60000 },
//   resave: false,
//   saveUninitialized: false
// }));

// // Access the session as req.session
// app.get('/login', function(req, res) {
//   req.session.user = 1;
//   res.end('User 1 is logged in, please go to the /discussion page.');
// });

// app.get('/discussion', function(req, res) {
//   var sess = req.session;
//   if (typeof sess.user === 'undefined') {
//      res.redirect('/login');
//   } else {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<p>user: ' + sess.user + '</p>');
//     res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
//     res.end();
//   }
// });
// app.post('/api/upload', (req, res, next) => {
//     const form = formidable({ multiples: true });
  
//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         next(err);
//         return;
//       }
//       res.json({ fields, files });
//     });
//   });
// // make this a middleware function, 
// // then put it on the route like you used jwt,
// // then get the value with req.users.

// const { IncomingForm } = require('formidable')
// const { resolve } = require('path')
// const { existsSync, writeFileSync } = require('fs')

// module.exports = (req, res, next) => {
//   const form = new IncomingForm({
//     maxFileSize: 1 * 1024 * 1024,
//     keepExtensions: true
//   })

//   form.parse(req, (error, fields, file) => {
//     if (error) return next(error)
//     const patternFile = /\.(jpg|jpeg|png|svg|gif|raw|webp)$/gi.test(file.productImage.name)

//     if (patternFile) {
//       const pathFile = resolve(process.cwd(), 'servers/uploads/', file.productImage.name)
//       const fileExits = existsSync(pathFile)
//       if (!fileExits) {
//         writeFileSync(pathFile)
//         req.users = JSON.parse(JSON.stringify({ fields, file }))
//         return next()
//       }
//       req.users = JSON.parse(JSON.stringify({ fields, file }))
//       return next()
//     }
//   })
// }
// const express = require('express');
// const formidable = require('formidable'); 
// const app = express();
//  app.get('/', (req, res) => { 
//      res.send(`    <h2>With <code>"express"</code> npm package</h2>   
//      <form action="/api/upload" enctype="multipart/form-data" method="post">   
//        <div>Text field title: <input type="text" name="title" /></div>     
//      <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /></div>
//           <input type="submit" value="Upload" />    </form>  `);});
// app.post('/api/upload', (req, res, next) => {  const form = formidable({ multiples: true });  
//  form.parse(req, (err, fields, files) => {    if (err) {      next(err);      return;    }  
//   res.json({ fields, files });  });}); 
// app.listen(3000, () => { 
//      console.log('Server listening on http://localhost:3000 ...');});

//     const schema = Joi.object().keys({
//       displayName:Joi.string().trim(),
//       fullname:Joi.string().trim(),
//       email:Joi.string().email(),
//       status:Joi.string().trim().max(100),
//       occupation:Joi.string().trim()

//   })
//   const result = schema.validate(req.body)
//   if(result.error){
//       res.send(result.error.message)
//   }else{        
//   console.log("success");
//   con.connect((err)=>{
//       if(err){
//           res.send("connecting...")
//       }else{
//           console.log('connected to database successfully')
//     const displayName = result.value.displayName;
//     const fullname = result.value.fullname;
//     const email = result.value.email;
//     const status = result.value.status;
//     const occupation = result.value.occupation;
//      const sql = "INSERT INTO profile (displayname,fullname,email,status,occupation) VALUES (?,?,?,?,?)";
//       con.query(sql,[displayName,fullname,email,status,occupation],(err,result)=>{
//        if (err) {console.log('unable to add data to the database'+ err)}
//        else{
//            console.log('Saved to database successfully')
//            res.send('success')
           
//        }
//       })}
//   })
//   }