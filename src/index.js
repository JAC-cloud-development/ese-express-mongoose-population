
import _ from 'lodash'
import express from "express";
import api from './api/index.js';
import mongooseInit from './services/db/mongoose.js'

await mongooseInit()

const app = express();

// NECESSARIO PER LEGGERE IL BODY JSON IN POST E PUT
app.use(express.json());

app.use(api)

app.listen(3000, function () {
    console.log(
        "The server has started on port 3000. Head to localhost:3000 in the browser and see what's there!"
    );
});