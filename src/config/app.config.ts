

export const EnvConfiguration = () => ({
    mongodb: process.env.MONGODB_URL,
    port: process.env.PORT || 3000,
    default_limit: process.env.DEFAULT_LIMIT || 10
});