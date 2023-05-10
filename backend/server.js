require('dotenv').config()
const adminRoutes = require('./routes/admin')
const userRoutes = require('./routes/user')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()

//middleware
app.use(express.json());
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use(cors());
app.use(cors({
    origin: ['http://localhost:5000/', 'http://localhost:3001/']
  }));

//routes



app.use('/admin', adminRoutes)
app.use('/user', userRoutes)



mongoose.connect('mongodb+srv://test:test@cluster0.l69p7lc.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        //listen on port 4000
        //app.listen(process.env.PORT, () => {
            //console.log('connected to db and listening on port 4000')
    })
    .catch((error) => {
        console.log(error)
    })
    module.exports = app;
