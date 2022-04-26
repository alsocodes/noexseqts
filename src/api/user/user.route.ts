import { Router } from 'express';
import { postUser } from './user.controller';
const userRoute = Router();

userRoute.post('/user', postUser);

export default userRoute;
