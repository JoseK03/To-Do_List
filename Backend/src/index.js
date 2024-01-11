import app from './app.js';
import './db.js'


app.listen(process.env.PORT);
console.log('Server in port', process.env.PORT);