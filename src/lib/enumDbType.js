export const DeploymentDbType = {
    mysql: 'MYSQL',
    mongodb: 'MongoDB',
    postgresql: 'PostgreSQL',
};

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));