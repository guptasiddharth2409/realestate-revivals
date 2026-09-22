const User = require('./models/User')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

dotenv.config()

mongoose.connect('mongodb://127.0.0.1:27017/real')
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err))

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('RealEstate Revivals Backend Running')
})

app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) return res.json({ message: 'User Already Exists' })
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({ username, email, password: hashedPassword })
    await newUser.save()
    res.json({ message: 'Register Success' })
  } catch (error) {
    console.log(error)
    res.json({ message: 'Error' })
  }
})

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) return res.json({ message: 'User Not Found' })
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) return res.json({ message: 'Wrong Password' })
    const token = jwt.sign({ id: user._id }, 'realestate_secret', { expiresIn: '7d' })
    res.json({ message: 'Login Success', token })
  } catch (error) {
    console.log(error)
    res.json({ message: 'Error' })
  }
})

app.listen(5000, () => {
  console.log('Server Running on 5000')
})