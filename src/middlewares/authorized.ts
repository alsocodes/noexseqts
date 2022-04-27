import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/jwt.config');
import HttpResponse from '../utils/response';

const authAccessToken = (req: Request, res: Response, next: NextFunction) => {
    const response = new HttpResponse();
    if (!req.headers.authorization) {
        return response.forbidden(res, 401, 'Headers authorization is empty');
    }
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, config.accessSecret, (err, _) => {
        if (err) {
            console.log(err);
            return response.unauthorized(res, 401, err.message);
        } else {
            req.user = _;
            next();
        }
    });
};

const authRefreshToken = (req, res, next) => {
    const refreshToken = req.headers.cookie.split('=');
    console.log(refreshToken.length);
    if (refreshToken.length != 2) {
        return response.unauthorized('Unauthorized', res);
    }
    jwt.verify(refreshToken[1], config.refreshSecret, (err, _) => {
        if (err) {
            console.log(err);
            return response.unauthorized(err.message || 'Unauthorized', res);
        } else {
            next();
        }
    });
};

module.exports = {
    authAccessToken,
    authRefreshToken,
};
