//ENTRY point for my application

const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const app = express();

app.use(cors());

app.use(logger);
app.use(express.json());

app.use('/api/locations', require('./routes/api/locations'));
app.use('/api/inventory', require('./routes/api/inventory'));

app.listen(5000, () => {
	console.log('listening');
});
