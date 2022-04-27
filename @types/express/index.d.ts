import { User } from '../../src/api/user/user.model';
// import { User } from "../../src/user/user.model";

declare global {
    namespace Express {
        interface Request {
            currentUser: User;
        }
    }
}
