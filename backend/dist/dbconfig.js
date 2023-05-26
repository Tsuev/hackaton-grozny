import Dotenv from 'dotenv';
Dotenv.config();
export const Config = {
    development: {
        url: process.env.POSTGRES_URL,
        dialect: 'postgres',
    },
    test: {
        url: process.env.POSTGRES_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.POSTGRES_URL,
        dialect: 'postgres',
    },
};
