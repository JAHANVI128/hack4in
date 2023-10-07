const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cors())

//category Routes
const categoryRoutes = require('./routes/CategoryRoutes');
app.use('/event',categoryRoutes);

//Caterer Routes
const CatererRoutes = require('./routes/CatererRoutes');
app.use('/caterer',CatererRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/hack4in",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

const PORT = 3001
app.listen(PORT,() => {
    console.log("server is running on port ",PORT);
})