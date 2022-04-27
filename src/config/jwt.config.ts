const config = {
    accessSecret: process.env.ACCESS_TOKEN_SECRET_KEY || 'loremipsum',
    refreshSecret: process.env.REFRESH_TOKEN_SECRET_KEY || 'loremipsum',
    jwtExp: '30d',
    jwtRefreshExp: '30d',
};

export default config;
