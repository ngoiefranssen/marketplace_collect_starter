const PORT = 4000;
const express = require("express");
const cors = require('cors');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const mongoDBClient = require('./mongoClient');

const schema = require('./schemas/index')


app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello Express!')
});

//API Rest 
const Product = require('./modules/product');
app.get('/prodcuts', async (req, res) => {

    const prodcuts = await Product.find({});
    try {
        res.send(prodcuts);
    } catch (e) {
        res.status(500).send(err)
    }
});

//Filtrage par category
const Product = require('./modules/product');
app.get('/prodcuts:category', async (req, res) => {

    const category = req.params.category
    const prodcuts = await Product.find({ category: category });
    try {
        res.send(prodcuts);
    } catch (e) {
        res.status(500).send(err)
    }
});

app.use('/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }));

app.listen(PORT, () => {
    console.log(`Server up an runing ${PORT}`);
    mongoDBClient.init();
});