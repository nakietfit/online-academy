module.exports = function(app) {
  app.use('/account', require('../routes/front/account.route'));
  app.use('/admin', require('../routes/home.route'));
};