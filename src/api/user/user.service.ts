import db from '../../db';

const createUser = async (payload: any) => {
    const user = await db.User.create(payload);
    console.log(user);
};

export { createUser };
