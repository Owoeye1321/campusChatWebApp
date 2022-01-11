const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const Joi = require('joi')
const fs = require('fs')
const path = require('path')
const formidable = require('formidable')
PORT = process.env.PORT || 4001
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mychat',
})
app.get('/api/signup', (req, res) => {
  res.send('Hello world , this is an api for the signup process')
})
app.post('/api/signup', (req, res) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email(),
    username: Joi.string().trim(),
    password: Joi.string().min(8),
  })
  const result = schema.validate(req.body)
  if (result.error) {
    console.log('An error has occured')
    res.send('Invalid details')
  } else {
    console.log('Success')

    con.connect((err) => {
      if (err) {
        console.log('unable to connect to database')
        res.send('Connecting...')
      } else {
        console.log('connected to database successfully')
        const username = result.value.username
        const password = result.value.password
        const email = result.value.email
        const sql = 'INSERT INTO users (username,password,email) VALUES (?,?,?)'
        con.query(sql, [username, password, email], (err, result) => {
          if (err) {
            console.log('unable to add data to the database' + err)
          } else {
            console.log('Saved to database successfully')
            res.send('success')
          }
        })
      }
    })
  }
})

app.get('/api/login', (req, res) => {
  res.send('This is  the api for the login process')
})
app.post('/api/login', (req, res) => {
  con.connect((err) => {
    if (err) {
      console.log('unable to log on to database')
    } else {
      console.log('connected to database successfully')
      const username = req.body.username
      const password = req.body.password
      const sql = 'SELECT * from users WHERE username = (?) AND password = (?)'
      con.query(sql, [username, password], (err, result) => {
        if (err) {
          console.log('unable to check data from the database' + err)
        } else {
          if (result == '') {
            console.log('user does not exist')
            res.send('Invalid details')
          } else {
            res.send('success')
            console.log('user exist')
          }
        }
      })
    }
  })
})
app.get('/api/editprofile', (req, res) => {
  res.send('This is the api for editing profile')
})
app.post('/api/editprofile', (req, res, next) => {
  //// console.log(req.body)
  const form = new formidable.IncomingForm({
    allowEmptyFiles: false,
    keepExtensions: true,
    uploadDir: path.join(__dirname, '..', 'uploads'),
    filter({ mimetype }) {
      return mimetype && mimetype.includes('image')
    },
  })
  form.parse(req, (err, fields, files) => {
    try {
      if (err) {
        throw err
      }

      console.log(fields)
      console.log(files.file.newFilename)

      res.json({
        filename: files.file.newFilename,
        message: 'File uploaded successfully',
      })
    } catch (err) {
      next(err)
    }
  })
})

app.all('*', (req, res, next) => {
  const err = new Error('404 Not Found!')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message)
})

app.listen(PORT, () => {
  console.log('Listening to port' + ' ' + PORT)
})
