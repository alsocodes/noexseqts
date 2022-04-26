import { Request, Response } from 'express';
import HttpResponse from '../../utils/response';
import { createUser } from './user.service';

const postUser = async (req: Request, res: Response) => {
    const response = new HttpResponse();
    try {
        await createUser(req.body);
        response.success(res, 201, 'Success');
    } catch (error: any) {
        response.serverError(res, error?.code || 500, error?.message || 'Error');
    }
};

export { postUser };
