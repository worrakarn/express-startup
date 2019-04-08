const express = require('express');
const config = require('./config.js');
const logger = require('./utils/logger');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./routes/routes');

const app = express();

if (config.get('env') == 'development') app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.get('/', (req, res) => res.send('hello world'));
 
app.listen(config.get('port'), () => logger.info(`app listening on port ${config.get('port')}!`))
