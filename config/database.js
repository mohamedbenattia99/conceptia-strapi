module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host : env('DATABASE_HOST','localhost'),
        port : env('DATABASE_PORT',5432),
        database: env('DATABASE_NAME', 'redsys'),
        username: env('DATABASE_USERNAME', 'redsys_admin'),
        password: env('DATABASE_PASSWORD', 'redsys_admin'),
        schema: 'public',

      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
