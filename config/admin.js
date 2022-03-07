module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f6dc5818ff0851c74fe1af1a4ea96db'),
  },
});
