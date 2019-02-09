import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import lodash from 'lodash';
import moment from 'moment';
import dotenv from 'dotenv';
import path from 'path';
import routers from './routers';

dotenv.config();

global._ = lodash;
global.moment = moment;

const app = express();

app.use(morgan());
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'static')));

app.get('/', (req, res) => {
  res.send('Hello World');
});

routers(app);

app.use('*', (req, res) => {
  res.status(404).json({ error: '잘못된 요청입니다' });
});

app.listen(process.env.PORT || 3000);

export default app;
