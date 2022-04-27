import { body, cookie, CustomValidator, param } from 'express-validator';
import UserService from './auth.service';

const userValidator = (method: string) => {
    switch (method) {
        case 'auth': {
            return [
                body('email').exists().withMessage('Email is required').isEmail().withMessage('Email format invalid'),
                body('password').exists().withMessage('Password is required'),
            ];
        }
        default:
            return [];
    }
};

export default userValidator;
