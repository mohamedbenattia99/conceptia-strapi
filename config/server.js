module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '828811e8aace1aa789067dffc85af376'),
    },
  },
 /* url : 'https://de7b66f1d552.ngrok.io'*/ // THIS must be changed at ngrok restart
});
