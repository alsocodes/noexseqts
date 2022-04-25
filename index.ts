import express from 'express';
import * as dotenv from 'dotenv';
import db from './models';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// db.sequelize.sync().then(() => {
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
// });
