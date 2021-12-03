module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7eda6f02f5285b2ef51f5068e960b9b8'),
  },
});
