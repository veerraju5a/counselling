const express=require('express')
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app= new express()
app.use(express.json())
app.use(cors())

const client = new MongoClient('mongodb+srv://admin:admin@m001.eqgp4.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db=client.db('mswdsrp')
const col=db.collection('register')

app.get('/home', (req,res)=>{
    res.send("Home Page")
})

app.post('/insert', (req,res)=>{
    console.log(req.body);
    col.insertOne(req.body)
    res.send("received succfully")
})

app.get('/showall', async (req,res)=>{
   const result= await col.find().toArray()
   res.send(result)
})
app.put('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const { name, role, email, password } = req.body;
      console.log(req.body)
      const result=await col.updateOne({ _id:new ObjectId(id) }, { $set: { name, role, email, password } });
      console.log(result)
      res.json({ message: 'User updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  app.delete('/users/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await col.deleteOne({ _id: new ObjectId(id) });
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    const user = await col.findOne({ email });
    console.log(user.email, user.password, password)
    if (!user || !(password===user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });
  
    res.json({ username: user.name, token });
  });

app.listen(8081, ()=>{console.log("server running")})
