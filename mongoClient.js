
const mongoose = require('mongoose');
const DB = 'marketplace';
const URI = `mongodb+srv://julia:julia1235@cluster0.wfghe2k.mongodb.net/${DB}?retryWrites=true&w=majority`;

const MongoDBClient = {
    init: () => {
        try {
            const client = mongoose.connect(URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            client.then(() => {
                console.log(`Successfully connected to DB : ${DB}`);
            });
        } catch (e) {
            throw Error(e);
        };
    }
}

module.exports = MongoDBClient