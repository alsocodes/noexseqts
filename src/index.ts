/**
 * Required External Modules
 */

import express, { Request, Response, Router } from 'express';
import * as dotenv from 'dotenv';
import db from './db';
import cors from 'cors';
import helmet from 'helmet';

// routes
import authRoute from './api/auth/auth.route';
import userRoute from './api/user/user.route';

dotenv.config();

/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App is running on port ${port}`);
    });
});

app.get('/', (req: Request, res: Response) => {
    res.send({ message: 'Hello i am ready' });
});

app.use('/api', userRoute);
app.use('/api', authRoute);
