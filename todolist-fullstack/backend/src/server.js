const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3333;


app.listen(3333, () => console.log('Server running on port 3333'))
