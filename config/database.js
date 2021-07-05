module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'conceptia'),
        username: env('DATABASE_USERNAME', 'conceptia_admin'),
        password: env('DATABASE_PASSWORD', 'conceptia_admin'),
        schema: 'public',

      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
