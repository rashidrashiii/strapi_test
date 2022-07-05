module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET',"zysuQM5fnNaVxyQOcjO6OA=="),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT',"IReBPMt8RQzy/jeAmYRTYA=="),
  },
});
