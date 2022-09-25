import express from 'express';
import {join} from 'path';
import routes from './routes/homeroutes.mjs'; 
import './models/commonmodel.mjs';
import connectdb from './db/connectdb.mjs';


const app = express();

const URL = process.env.URL || 'mongodb://localhost:27017';

connectdb(URL);

const PORT = process.env.PORT || '5500';

app.set('view engine', 'ejs');

app.use(express.static('staticfiles/css'));
app.use(express.static(join(process.cwd(),'staticfiles/img')));
app.use(express.static(join(process.cwd(),'staticfiles/js')));

app.use(express.urlencoded({extended:false}));

app.use('/ecommerce',routes);

app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
});