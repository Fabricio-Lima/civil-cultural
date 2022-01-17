const { i18n } = require('./next-i18next.config')
const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();
 
const withNextEnv = nextEnv();

module.exports = withNextEnv({
  webpack5: true,
  i18n,
  images: {
    files: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
    domains: [
      'img.freepik.com'
    ]
  }
})